import { ServerResponse } from '../../shared';
import Resolver from './Resolver';

class HttpResolver extends Resolver<ServerResponse> {
    public resolve() {
        return new Promise<ServerResponse>((resolve, reject) => {
            resolve({
                code: 200,
                error: false,
                message: 'OK',
            });
        });
    }
}

export default HttpResolver;
