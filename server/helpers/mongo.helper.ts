import mongoose from "mongoose";

class MongoHelper {
  public static async connect() {
    const mongoDBName: string = process.env.MONGO_DB_STRING ?? "";
    return new Promise((resolve, reject): void => {
        mongoose
            .connect(mongoDBName)
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
