import { MongooseDocument } from '../../models';

function MongooseDocumentMapper<T, V>(doc: MongooseDocument<T>, defautObject: V): V {
    const entries: [string, any][] = Object.entries(doc);
    const _docEntries: [string, any] = entries.find(item => item[0] === '_doc');
    const mongooseDocument: MongooseDocument<T> = _docEntries[1];
    if (!mongooseDocument) {
        throw new Error('Invalid MongooseDocument');
    }
    return Object.entries(mongooseDocument).reduce((newObject: V, [key, value]) => {
        if (Object.keys(defautObject).includes(key)) {
            (newObject as any)[key] = value;
        };
        return newObject;
    }, {} as V);
}

export default MongooseDocumentMapper;
