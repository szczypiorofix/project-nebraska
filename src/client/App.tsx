import React from 'react';

import { AppProvider } from './context/AppContext';
import ViewResolver from './views/ViewResolver';

import './index.scss';

export const App: React.FC = () => {
    return (
        <AppProvider>
            <ViewResolver />
        </AppProvider>
    );
}

export default App;
