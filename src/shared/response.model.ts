import { User } from './user.model';

export interface ServerResponse {
    error: boolean;
    code: number;
    message: string;
}

export interface ServerUsersResponse extends ServerResponse {
    data?: User[];
}

export interface MongoDBData {
    dbname: string;
}

export interface MongoDBResponse {
    data?: MongoDBData;
}

export enum CONNECTION_STATUS {
    DISCONNECTED = "rozłączony",
    CONNECTING = "łączenie",
    CONNECTED = "połączony"
}
