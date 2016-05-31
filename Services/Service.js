import mongorito         from 'mongorito';
import { User, Address } from '../Models';
import { ObjectId }      from 'mongodb';

const MongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/hw';

mongorito.connect(MongoUrl);
console.log(`Connected to DB ${MongoUrl}`);
