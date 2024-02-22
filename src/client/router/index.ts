import { CurrentAppConfig } from '../config';

export const registerRoute: string = CurrentAppConfig.api.baseUrl + "/users/register";

export const loginRoute: string = CurrentAppConfig.api.baseUrl + "/users/login";

export const usersRoute: string = CurrentAppConfig.api.baseUrl + "/users";

export const serverStatusRoute: string = CurrentAppConfig.api.baseUrl + "/status/server";

export const mongodbStatusRoute: string = CurrentAppConfig.api.baseUrl + "/status/mongodb";
