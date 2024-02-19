
namespace Sqlite3 {

    export interface Sqlite3model<T> {
        [key:string]: T;
    }

    export interface CommonData {
        notNull?: boolean;
        primaryKey?: boolean;
        autoIncrement?: boolean;
    }

    export interface StringData extends CommonData {
        name: string;
        value?: string;
    }

    export interface NumberData extends CommonData {
        name: string;
        value?: number;
    }

    export interface BooleanData extends CommonData {
        name: string;
        value?: boolean;
    }

    export class Sqlite3Generator {

        public buildQuery<T>(obj: T): string {
            // 'CREATE TABLE IF NOT EXISTS `users` (`user_id` INTEGER PRIMARY KEY AUTOINCREMENT, `email` VARCHAR(255) NOT NULL, `secret` varchar(255) NOT NULL)',
            let query = "";

            // Object.keys(obj).forEach(objectItem => {
            //     console.log(objectItem);
            // });

            // TODO: Prepare query for DB

            return query;
        }

        public createTable() {

        }

    }

}

export default Sqlite3;
