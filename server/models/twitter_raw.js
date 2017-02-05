import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
  id: { type: 'Number', required: true },
  author: { type: 'String', required: true },
  raw: {},
});

export default mongoose.model('TwitterRaw', postSchema);
