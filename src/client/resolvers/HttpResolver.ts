import { Resolver } from './Resolver';

class HttpResolver implements Resolver{

    public resolve() {
        console.log("HttpResolver:resolve");
    };

}

export default HttpResolver;
