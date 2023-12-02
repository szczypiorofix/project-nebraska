import React from 'react';

import { Home } from "./views/home/Home";
import { AppProvider } from './context/AppContext';

export const App: React.FC = () => {
    return (
        <div className="main-view-background">
            <div className="container main-view">
                <h2>APP</h2>
                <AppProvider>
                    <Home />
                </AppProvider>
            </div>
        </div>
    );
}

export default App;
