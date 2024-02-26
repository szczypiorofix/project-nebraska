
class HttpService {

    public static async get<V>(url: string): Promise<V> {
        return new Promise<V>(async (resolve, reject) => {
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

    public static post<T, V>(url: string, data: T): Promise<V> {
        return new Promise<V>(async (resolve, reject) => {
            try {
                const fetchResponse: Response = await fetch(url, {
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "*",
                        "Access-Control-Allow-Methods": "*",
                        "Access-Control-Allow-Credentials": "true",
                        "Access-Control-Max-Age": "1728000"
                    },
                    method: "POST",
                });
                resolve(await fetchResponse.json());
            } catch (err) {
                reject(err);
            }
        });
    }

}

export default HttpService;
