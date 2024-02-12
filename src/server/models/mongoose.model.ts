import { Document, Types } from 'mongoose';

export type MongooseDocument<T,> = Document<unknown, {}, T> & T & {_id: Types.ObjectId};
