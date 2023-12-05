import React from 'react';
import { AppContext } from '../context/AppContext';
import { APP_VIEW, AppContextType } from '../types/app';
import { Container } from '../shared/components/Container';
import { Button } from '../shared/components/Button';

const ViewResolver: React.FC = () => {
    const { app, setView } = React.useContext(AppContext) as AppContextType;

    const resolveView = () => {
        switch(app.view) {
        case APP_VIEW.MAIN:
            return <div>MAIN</div>
        case APP_VIEW.DASHBOARD:
            return <div>DASHBOARD</div>
        default:
            return <div>DEFAULT</div>
        }
    }

    const setCurrentView = ( view: APP_VIEW ) => {
        setView(view);
    }

    return <Container>
        <Container>
            <Button title={ "DASHBOARD" } onClick={ () => setCurrentView(APP_VIEW.DASHBOARD) }></Button>
            <Button title={ "SPLASH" } onClick={ () => setCurrentView(APP_VIEW.SPLASH) }></Button>
            <Button title={ "MAIN" } onClick={ () => setCurrentView(APP_VIEW.MAIN) }></Button>
        </Container>
        <Container>
            { resolveView() }
        </Container>
    </Container>
}

export default ViewResolver;
