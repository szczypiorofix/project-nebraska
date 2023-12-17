
const useRequest = <T,>(url: string, requestOptions?: RequestInit): Promise<T> => {
    return new Promise((resolve, reject) => {
        let response: Promise<T> | null = null;
        try {
            fetch(url, requestOptions)
            .then((resp => {
                if (!resp.ok) {
                    reject(resp);
                }
                try {
                    response = resp.json();
                } catch(jsonErr) {
                    reject(jsonErr);
                }
                return response;
            }))
            .then((data) => resolve(data))
            .catch(err => reject(err));
        } catch(err) {
            reject(err);
        }
    });
}

export default useRequest;
