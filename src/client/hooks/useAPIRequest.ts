import { useCallback, useState } from 'react';

// NO USAGE RIGHT NOW

export const useAPIRequest = <T,>( url: string, defaultValue: T): [ ( requestOptions: RequestInit ) => void, T, boolean, boolean, string ] => {
    const [ response, setResponse ] = useState<T>( defaultValue );
    const [ loading, setLoading ] = useState( false );
    const [ hasError, setHasError ] = useState( false );
    const [ errorMessage, setErrorMessage ] = useState( "" );
    const execute = useCallback( ( requestOptions: RequestInit ) => {
        ( async function becauseILuvUwuAsyncFunctionsIksDe() {
            setLoading(true );
            try {
                const response = await fetch( url, requestOptions );
                if ( !response.ok ) {
                    console.error( JSON.stringify( response ) );
                    const responseText = await response.text();
                    console.error( responseText );
                    setErrorMessage( "API request error: " + responseText.toString() );
                    setLoading(false );
                    setHasError(true );
                }
                setLoading(false);
                setResponse( ( await response.json() ) as T);
            } catch ( e ) {
                console.error("useAPIRequest: ", e );
                setErrorMessage( "API request error: " + e.toString() );
                setLoading(false );
                setHasError(true );
            }
        } )();
    }, [ url ] );
    return [ execute, response, loading, hasError, errorMessage ];
}
