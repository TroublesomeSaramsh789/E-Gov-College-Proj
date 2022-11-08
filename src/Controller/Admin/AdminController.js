import Express from 'express';

const AdminController = Express.Router();

AdminController.get('/:id', async (req, res) => {
  try {
  } catch (err) {
    console.log(`\n\n[${Date()}] - ERROR:${err}`);
    res.status(400).send(err);
  }
});

export default AdminController;
