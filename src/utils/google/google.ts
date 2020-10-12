import fs from 'fs';
import readline from 'readline';
import { google, Auth } from 'googleapis';
import config from '../../config/appConfig';
import { Balance } from '../../models/balance';

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

const getNewToken = (oAuth2Client: Auth.OAuth2Client) => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });

  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err)
        return console.error(
          'Error while trying to retrieve access token',
          err
        );
      // oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
    });
  });
};

const getToken = () => fs.readFileSync(TOKEN_PATH, 'utf8');

const authorize = (): Auth.OAuth2Client => {
  const { client_secret, client_id, redirect_uris } = config;

  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris
  );

  const token = getToken();

  token
    ? oAuth2Client.setCredentials(JSON.parse(token))
    : getNewToken(oAuth2Client);

  // Check if we have previously stored a token.
  // fs.readFile(TOKEN_PATH, 'utf8', (err, token) => {
  //   if (err) return getNewToken(oAuth2Client);
  //   oAuth2Client.setCredentials(JSON.parse(token));
  // });
  return oAuth2Client;
};

export const getBalance = async () => {
  const auth = authorize();
  const sheets = google.sheets({ version: 'v4', auth });

  sheets.spreadsheets.batchUpdate();

  const result = await sheets.spreadsheets.values.get({
    spreadsheetId: config.spreadsheetId,
    range: 'Summary!E24:O26',
  });

  const dates = result.data.values[0];
  const bpiBalances = result.data.values[1];
  const cgdBalances = result.data.values[2];

  const balances: Balance[] = new Array();
  for (let i = 0; i <= dates.length; i++) {
    balances.push({
      date: dates[i],
      bank1: {
        name: 'BPI',
        balance: bpiBalances[i],
      },
      bank2: {
        name: 'CGD',
        balance: cgdBalances[i],
      },
    });
  }

  return balances;
};
