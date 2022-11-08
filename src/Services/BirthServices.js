import BirthSchema from '../Model/BirthModel.js';

export const getBirthData = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const Data = await BirthSchema.find();
      resolve(Data);
    } catch (err) {
      reject(err);
    }
  });
};

export const getBirthDataById = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const Data = await BirthSchema.findById(_id);
      resolve(Data);
    } catch (err) {
      reject(err);
    }
  });
};

export const postBirthData = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const Data = BirthSchema({ ...data });
      const result = await Data.save();
      resolve(Data, result);
    } catch (err) {
      reject(err);
    }
  });
};

export const deleteBirthData = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await BirthSchema.deleteOne({ _id });

      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
};
