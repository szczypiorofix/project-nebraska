import { useState } from 'react';

export interface LocalStorageError {
    code: number;
    error: boolean;
    message: string;
}

export function useLocalStorage<T>(defaultValue: T, objectName: string): [T, (saveObj: T) => void, () => void, LocalStorageError, () => void] {
    const [state, setState] = useState<T>(defaultValue);
    const [error, setError] = useState<LocalStorageError>({
        code: 0,
        error: false,
        message: ""
    });
    const save = (obj: T): void => {
        let objectAsString: string = "{}";
        try {
            objectAsString = JSON.stringify(obj);
        } catch(err) {
            console.error(err);
            setError({
                code: 1,
                error: true,
                message: JSON.stringify(err)
            });
        }
        localStorage.setItem(objectName, objectAsString);
    }
    const load = (): void => {
        const objStr: string = localStorage.getItem(objectName) ?? "{}";
        let obj: T = defaultValue;
        try {
            obj = JSON.parse(objStr);
        } catch(err) {
            console.error(err);
            setError({
                code: 2,
                error: true,
                message: JSON.stringify(err)
            });
        }
        setState(obj);
    }
    const debug = (): void => {
        console.dir(state);
    }
    return [state, save, load, error, debug];
}
