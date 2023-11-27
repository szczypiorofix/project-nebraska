export interface ServerResponse {
    error: boolean;
    code: number;
    message: string;
}

export interface MongoDBData {
    dbname: string;
}

export interface MongoDBResponse {
    data?: MongoDBData;
}
