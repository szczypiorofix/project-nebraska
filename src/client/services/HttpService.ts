import { ServerResponse } from '../../shared/response.model';

class HttpService {

    public static async get(url: string): Promise<ServerResponse> {
        const fetchResponse: Response = await fetch(url);
        const httpResponse: Response = HttpService.handleErrors(fetchResponse);
        return await httpResponse.json();
    }

    public static handleErrors(response: Response): Response {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response;
    }

}

export default HttpService;
