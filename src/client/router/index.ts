import { CurrentAppConfig } from '../config';

export enum TargetPath {
    MONGO_STATUS,
    SERVER_STATUS,
    LOGIN,
    REGISTER
}

export const registerRoute: string = CurrentAppConfig.api.fullPath + "/register";

export const usersRoute: string = CurrentAppConfig.api.fullPath + "/users";
