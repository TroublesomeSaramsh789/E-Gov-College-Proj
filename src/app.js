import Express from 'express';
import CORS from 'cors';
import Helmet from 'helmet';

import dbConnection from './config/dbConnection.js';
import RouteController from './Routes/index.js';

const App = Express();
const PORT = process.env.PORT || 3600;

// Database Connection
try {
  dbConnection();
} catch (err) {
  console.log(err);
}

// Middleware
App.use(CORS());
App.use(Helmet());
App.use(Express.urlencoded({ extended: true }));
App.use(Express.json());

// Route Middleware
App.use('/', RouteController);

App.listen(PORT, () => {
  console.log(`Listening To The Server PORT:${PORT}`);
});
