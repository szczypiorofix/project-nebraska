import { useState } from 'react';

export function useLocalStorage<T>( defaultValue: T, objectName: string ): [ T, ( saveObj: T) => void, () => void, () => void ] {
    const [ state, setState ] = useState<T>( defaultValue );
    const save = ( obj: T ): void => {
        localStorage.setItem( objectName, JSON.stringify( obj ) );
    }
    const load = (): void => {
        const objStr: string = localStorage.getItem( objectName ) ?? "";
        const obj: T = ( JSON.parse( objStr ) ?? defaultValue ) as T;
        setState( obj );
    }
    const debug = (): void => {
        console.dir( state );
    }
    return [ state, save, load, debug ];
}
