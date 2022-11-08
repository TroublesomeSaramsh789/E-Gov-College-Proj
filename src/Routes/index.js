import Express from 'express';

// Controllers
import BirthController from '../Controller/Birth/BirthController.js';
const AdminController = require('../Controller/Admin/AdminController.js');

const Router = Express.Router();

Router.use('/birth', BirthController);
RouteController.use('/admin', AdminController);

Router.get('/', (req, res) => {
  res.status(200).send('<h3>Working</h3>');
});

export default Router;
