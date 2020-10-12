import assert from 'assert';
import dotenv from 'dotenv';

// read in the .env file
dotenv.config();

// capture the environment variables the application needs
const {
  PORT,
  CLIENTID,
  PROJECTID,
  AUTHURI,
  TOKENURI,
  AUTHPROVIDERCERT,
  CLIENTSECRET,
  REDIRECTURI,
  ORIGINS,
  SPREADSHEETID,
  APIKEY,
} = process.env;

// validate the required configuration information
assert(PORT, 'PORT configuration is required.');

// export the configuration information
export default {
  port: PORT,
  client_id: CLIENTID,
  project_id: PROJECTID,
  auth_uri: AUTHURI,
  token_uri: TOKENURI,
  auth_provider_x509_cert_url: AUTHPROVIDERCERT,
  client_secret: CLIENTSECRET,
  redirect_uris: REDIRECTURI,
  javascript_origins: ORIGINS,
  spreadsheetId: SPREADSHEETID,
  apiKey: APIKEY,
};
