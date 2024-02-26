import { ServerResponse, IUser } from '../../../../shared';

export interface RegisterUserServerResponse extends ServerResponse {
    data?: IUser;
}
