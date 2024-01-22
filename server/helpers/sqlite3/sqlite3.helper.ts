import sqlite3, { Database, RunResult } from 'sqlite3';
import Sqlite3 from './sqlite3.generator';

class Sqlite3Helper {

    private db: sqlite3.Database;

    public constructor() {}

    public init(): void {
        sqlite3.verbose();
        this.db = new Database('db.sqlite3');
        const self: sqlite3.Database = this.db;

        const userData: Sqlite3.Sqlite3model<Sqlite3.StringData> = {
            Name: {
                name: "Imię",
                value: "Janek"
            }
        };

        const generator = new Sqlite3.Sqlite3Generator();
        const query: string = generator.buildQuery(userData);

        console.log("Query: ", query);

        self.serialize(() => {
            const createTableStatement = self.run(
                'CREATE TABLE IF NOT EXISTS `users` (`user_id` INTEGER PRIMARY KEY AUTOINCREMENT, `email` VARCHAR(255) NOT NULL, `secret` varchar(255) NOT NULL)',
                (result: RunResult, err: Error) => {
                    if (result) {
                        console.info(result);
                    }
                    if (err) {
                        console.error(err);
                    }
                }
            );

            createTableStatement.on("close", () => {
                console.log("create table statement closed");
            });

            createTableStatement.on("error", (err: Error) => {
                console.error(err);
            });
        });

        self.on("close", (err: Error) => {
            console.log("SQLITE3 connection closed.");
            if (err) {
                console.error(err);
            }
        });
    }

    public close(): void {
        if (this.db) {
            this.db.close();
        }
    }

}

export default Sqlite3Helper;

