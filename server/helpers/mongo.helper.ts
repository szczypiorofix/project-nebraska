import mongoose from "mongoose";

class MongoHelper {
  public static async connect() {
    const { MONGO_DB_STRING } = process.env;
    return new Promise((resolve, reject): void => {
        mongoose
            .connect(MONGO_DB_STRING)
            .then((): void => {
                resolve(mongoose.connection);
            })
            .catch((err) => reject(err));
        mongoose.connection.on('error', (err): void => {
            reject(err);
        });
    });
  }
}

export default MongoHelper;
