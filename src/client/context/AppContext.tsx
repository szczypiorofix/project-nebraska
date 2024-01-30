import React, { useState } from 'react';
import { APP_VIEW, AppContextType, IApp } from '../types/app';
import { initialContextState } from './initialContextState';
import { Props } from '../shared/models/models';

export const AppContext: React.Context<AppContextType> = React.createContext<AppContextType>(initialContextState);

export const AppProvider: React.FC<Props> = (props: Props) => {
    const [app, setApp] = useState<IApp>({
        view: APP_VIEW.SPLASH
    });
    const setView = ( view: APP_VIEW ): void => {
        setApp({ view });
    }
    return <AppContext.Provider value={ { app, setView } }>
        {props.children}
    </AppContext.Provider>;
}
