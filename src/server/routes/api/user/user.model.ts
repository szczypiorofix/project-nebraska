import { Types, Document } from 'mongoose';
import { ServerResponse, IUser } from '../../../../shared';

export type UserResults = (Document<IUser> & IUser & {_id: Types.ObjectId})[];

export interface UserRouterGetResponse extends ServerResponse {
    data?: UserResults;
}
