import mongorito         from 'mongorito';
import { User, Address } from '../Models';
import { ObjectId }      from 'mongodb';

const MongoUrl = process.env.MONGO_URI || 'mongodb://localhost:27017/hw';

mongorito.connect(MongoUrl);
console.log(`Connected to DB ${MongoUrl}`);

// USER(S)
export function getAllUsers () {
  return User.sort('created_at', -1).find();
}

export function getUser (id) {
  return User.findById(id);
}

// Need to copy the whole model on the CS to pass in as ctx AND address
export function updateUser (id, ctx) {
  let user = new User({_id: ObjectId(id)});
  user.set(ctx);
  user.save();
  return user.get();
}

export async function deleteUser (id) {
  await User.remove({_id: ObjectId(id)});
  return getAllUsers();
}

export function saveUser (ctx) {
  let user = new User(ctx);
  user.save();
  return user.get();
}

// ADDRESS(ES)
export function getAllAddresses () {
  return Address.find();
}

export function getAddressById (id) {
  return Address.findById(id);
}

export async function findAddress (data) {
  let address = await Address.findOne(data);
  return address ? address.attributes : '';
}

export async function deleteAddress (id) {
  await Address.remove({_id: ObjectId(id)});
  return getAllAddresses();
}

export async function saveAddress (ctx) {
  let address = new Address(ctx);
  await address.save();
  return address.get();
}
