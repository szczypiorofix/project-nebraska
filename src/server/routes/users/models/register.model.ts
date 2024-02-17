import { ServerResponse, IUser } from '../../../../shared';

export interface RegisterRouterGetResponse extends ServerResponse {
    data?: IUser;
}
