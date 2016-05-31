import mongorito         from 'mongorito';
import { User, Address } from '../Models';
import { ObjectId }      from 'mongodb';

const MongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/hw';

mongorito.connect(MongoUrl);
console.log(`Connected to DB ${MongoUrl}`);

// USER(S)
export function getAllUsers () {
  return User.sort('created_at', -1).find();
}

export function getUser (id) {
  return User.findById(id);
}
