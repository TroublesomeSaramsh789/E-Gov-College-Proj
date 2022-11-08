import Express from 'express';

import * as BirthServices from '../../Services/BirthServices.js';

const BirthController = Express.Router();

BirthController.get('/', async (req, res) => {
  try {
    const result = await BirthServices.getBirthData();
    res.send(result);
  } catch (err) {
    console.log(`\n\n[${Date()}] - ERROR:${err}`);
    res.status(400).send(err);
  }
});

BirthController.get('/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await BirthServices.getBirthDataById(_id);

    res.send(result);
  } catch (err) {
    console.log(`\n\n[${Date()}] - ERROR:${err}`);
    res.status(400).send(err);
  }
});

BirthController.post('/', async (req, res) => {
  try {
    const { detail, description, address, contact } = req.body;
    const result = await BirthServices.postBirthData({
      detail,
      description,
      address,
      contact,
    });
    res.send(result);
  } catch (err) {
    console.log(`\n\n[${Date()}] - ERROR:${err}`);
    res.status(400).send(err);
  }
});

BirthController.delete('/', async (req, res) => {
  try {
    const { _id } = req.body;
    const result = await BirthServices.deleteBirthData(_id);
    res.send(result);
  } catch (err) {
    console.log(`\n\n[${Date()}] - ERROR:${err}`);
    res.status(400).send(err);
  }
});

export default BirthController;
