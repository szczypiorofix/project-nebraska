import { CurrentAppConfig } from '../config';

export enum TargetPath {
    MONGO_STATUS,
    SERVER_STATUS,
    LOGIN,
    REGISTER
}

export const registerRoute: string = CurrentAppConfig.api.baseUrl + "/register"; // http://localhost:8080/api/register/

export const loginRoute: string = CurrentAppConfig.api.baseUrl + "login"; // http://localhost:8080/api/login/

export const mongoStatusRoute: string = CurrentAppConfig.api.baseUrl  + "/status/mongodb"; // http://localhost:8080/api/status/mongodb/

export const serverStatusRoute: string =  CurrentAppConfig.api.baseUrl + "/status/server"; // http://localhost:8080/api/status/server/
