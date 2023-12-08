import React from 'react';
import { AppContext } from '../context/AppContext';
import { APP_VIEW, AppContextType } from '../types/app';
import { Container } from '../shared/components/Container';
import { Button } from '../shared/components/Button';
import { SplashScreen } from './splash/SplashScreen';
import { Admin } from './admin/Admin';
import { Home } from './home/Home';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';

const ViewResolver: React.FC = () => {
    const { app, setView } = React.useContext(AppContext) as AppContextType;

    const resolveView = () => {
        switch(app.view) {
        case APP_VIEW.HOME:
            return <Home></Home>
        case APP_VIEW.ADMIN:
            return <Admin></Admin>
        default:
            return <SplashScreen></SplashScreen>
        }
    }

    const setCurrentView = ( view: APP_VIEW ) => {
        setView(view);
    }

    return <>
        <Header>
            <div style={{ minHeight: "32px" }}>

            </div>
        </Header>
        <Main>
            <Container>
                <Button title={ "SPLASH" } onClick={ () => setCurrentView(APP_VIEW.SPLASH) }></Button>
                <Button title={ "HOME" } onClick={ () => setCurrentView(APP_VIEW.HOME) }></Button>
                <Button title={ "ADMIN" } onClick={ () => setCurrentView(APP_VIEW.ADMIN) }></Button>
            </Container>
            <Container>
                { resolveView() }
            </Container>
        </Main>
        <Footer>

        </Footer>
    </>
}

export default ViewResolver;
