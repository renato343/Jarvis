import app from "./app";
import { connect } from "./database/database";
import config from './config/appConfig';

 // Connect to Mongo
 connect('jarvis');

const PORT = process.env.PORT || "8000";
  app.listen(config.port, () => {
    console.log("HTTP server running on port:", PORT);
  });
