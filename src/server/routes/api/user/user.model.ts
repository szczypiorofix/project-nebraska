import { Types } from 'mongoose';
import { ServerResponse, User } from '../../../../shared';

export type UserResults = (Document & User & {_id: Types.ObjectId})[];

export interface UserRouterGetResponse extends ServerResponse {
    data?: UserResults;
}
