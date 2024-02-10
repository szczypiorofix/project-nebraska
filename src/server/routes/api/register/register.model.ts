import { ServerResponse, User } from '../../../../shared';

export interface RegisterRouterGetResponse extends ServerResponse {
    data?: User;
}
