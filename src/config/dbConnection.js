import mongoose from 'mongoose';

const dbConnection = async () =>
  await mongoose.connect('mongodb://localhost:27017/BirthRegistrationSystem');

export default dbConnection;
