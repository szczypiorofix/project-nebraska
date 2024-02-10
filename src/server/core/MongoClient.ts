import mongoose, { Connection, ConnectOptions, mongo } from 'mongoose';

class MongoClient {

    private connection: Connection;

    private static instance: MongoClient = null;

    private constructor() {}

    public static getInstance(): MongoClient {
        if (this.instance === null) {
            this.instance = new this();
        }
        return this.instance;
    }

    public async connect(): Promise<mongoose.Connection> {
        const { MONGO_DB_STRING } = process.env;
        return new Promise((resolve, reject): void => {
            mongoose.connect(MONGO_DB_STRING, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            } as ConnectOptions)
                .then((): void => {
                    this.connection = mongoose.connection;
                    resolve(mongoose.connection);
                })
                .catch((err) => {
                    reject(err);
                });

            mongoose.connection.on('error', (err): void => {
                reject(err);
            });
        });
    }

    public async close () {
        if (!this.connection) {
            throw new Error("MongoClient: connection object is nul!");
        }
        await this.connection.close();
    }

    public db(): mongo.Db {
        if (!this.connection) {
            throw new Error("MongoClient: connection object is nul!");
        }
        return this.connection.db;
    }
}

export default MongoClient;
