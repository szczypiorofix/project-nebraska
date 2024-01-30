import React from 'react';
import { AppContext } from '../context/AppContext';
import { APP_VIEW, AppContextType, viewNameResolve } from '../types/app';
import Container from '../shared/components/Container';
import Button from '../shared/components/Button';
import { SplashScreen } from './splash/SplashScreen';
import Admin from './admin/Admin';
import Home from './home/Home';
import { Header } from '../components/header-component/Header';
import { Main } from '../components/main-component/Main';
import { Footer } from '../components/footer-component/Footer';
import Navbar from '../shared/components/Navbar';
import UnorderedList from '../shared/components/UnorderedList';
import Login from './login/Login';

const ViewResolver: React.FC = () => {
    const { app, setView } = React.useContext(AppContext) as AppContextType;

    const resolveView = () => {
        switch(app.view) {
        case APP_VIEW.HOME:
            return <Home></Home>
        case APP_VIEW.ADMIN:
            return <Admin></Admin>
        case APP_VIEW.LOGIN:
            return <Login></Login>
        default:
            return <SplashScreen></SplashScreen>
        }
    }

    const setCurrentView = (view: APP_VIEW) => {
        setView(view);
    }

    const renderList = (item: string, index: number): React.ReactElement => {
        return <li key={index}>{item}</li>;
    }

    const items: string[] = [
        "jeden", "dwa"
    ];

    return <>
        <Header>
            <Navbar title={viewNameResolve(app.view)}></Navbar>
        </Header>
        <Main>
            <Container>
                <Button
                    title={ "SPLASH" }
                    onClick={ () => setCurrentView(APP_VIEW.SPLASH) }
                />
                <Button
                    title={ "HOME" }
                    onClick={ () => setCurrentView(APP_VIEW.HOME) }
                />
                <Button
                    title={ "ADMIN" }
                    onClick={ () => setCurrentView(APP_VIEW.ADMIN) }
                />
            </Container>
            <Container>
                { resolveView() }
            </Container>
        </Main>
        <Footer>
            <UnorderedList
                items={ items }
                renderItem={ renderList }
            />
        </Footer>
    </>
}

export default ViewResolver;
