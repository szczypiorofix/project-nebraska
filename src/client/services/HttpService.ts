import { ServerResponse } from '../../shared';

class HttpService {

    public static async get(url: string): Promise<ServerResponse> {
        return new Promise<ServerResponse>(async (resolve, reject) => {
            try {
                const fetchResponse: Response = await fetch(url, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "GET",
                });
                if (!fetchResponse.ok) {
                    reject(fetchResponse.statusText);
                }
                resolve(await fetchResponse.json());
            } catch (err) {
                reject(err);
            }
        });
    }

    public static post<T>(url: string, data: T): Promise<ServerResponse> {
        return new Promise<ServerResponse>(async (resolve, reject) => {
            try {
                const fetchResponse: Response = await fetch(url, {
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                });
                if (!fetchResponse.ok) {
                    reject(fetchResponse.statusText);
                }
                resolve(await fetchResponse.json());
            } catch (err) {
                reject(err);
            }
        });
    }

}

export default HttpService;
