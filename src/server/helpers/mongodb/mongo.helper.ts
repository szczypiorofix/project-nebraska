import { MongooseDocument } from '../../models';

function MongooseDocumentMapper<T>(doc: MongooseDocument<T>, defaultObject: T): T {
    const entries: [string, any][] = Object.entries(doc);
    const _docEntries: [string, any] = entries.find(item => item[0] === '_doc');
    if (!Array.isArray(_docEntries) || _docEntries.length !== 2) { // should be 2 elements in _docEntries
        throw new Error('Invalid MongooseDocument');
    }
    const mongooseDocument: MongooseDocument<T> = _docEntries[1];
    return Object.entries(mongooseDocument).reduce((newObject: T, [key, value]) => {
        if (Object.keys(defaultObject).includes(key)) {
            (newObject as any)[key] = value;
        }
        return newObject;
    }, {} as T);
}

export default MongooseDocumentMapper;
