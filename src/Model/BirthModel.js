import Mongoose from 'mongoose';

const { Schema } = Mongoose;

const BirthSchema = new Schema({
  detail: Schema.Types.Mixed,
  description: Schema.Types.Mixed,
  address: Schema.Types.Mixed,
  contact: Schema.Types.Mixed,
  dateCreated: { type: Date, default: Date.now() },
});

const BirthModel = Mongoose.model('Blog', BirthSchema);

export default BirthModel;
