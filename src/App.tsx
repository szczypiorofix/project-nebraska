import React from 'react';

import { AppProvider } from './context/AppContext';
import ViewResolver from './views/ViewResolver';

export const App: React.FC = () => {
    return (
        <div className="main-view-background">
            <div className="container main-view">
                <AppProvider>
                    <ViewResolver />
                </AppProvider>
            </div>
        </div>
    );
}

export default App;
