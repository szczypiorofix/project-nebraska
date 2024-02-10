import { ServerResponse } from '../../shared';

class HttpService {

    public static async get(url: string): Promise<ServerResponse> {
        const fetchResponse: Response = await fetch(url);
        const httpResponse: Response = HttpService.handleErrors(fetchResponse);
        return await httpResponse.json();
    }

    public static async post<T>(url: string, data: T): Promise<ServerResponse> {
        const fetchResponse: Response = await fetch(url, {
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });
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
