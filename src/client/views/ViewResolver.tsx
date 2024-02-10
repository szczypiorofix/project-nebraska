import React from 'react';
import { AppContext } from '../context/AppContext';
import { APP_VIEW, AppContextType, viewNameResolve } from '../types';
import Container from '../shared/components/container/Container';
import Button from '../shared/components/buttonn/Button';
import { SplashScreen } from './splash/SplashScreen';
import Admin from './admin/Admin';
import Home from './home/Home';
import { Header } from '../main-parts/header-component/Header';
import { Main } from '../main-parts/main-component/Main';
import { Footer } from '../main-parts/footer-component/Footer';
import Navbar from '../shared/components/navbar/Navbar';
import UnorderedList from '../shared/components/unorderedlist/UnorderedList';
import Login from './login/Login';
import Register from './register/Register';

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
            case APP_VIEW.REGISTER:
                return <Register></Register>
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
                <Button
                    title={ "LOGIN" }
                    onClick={ () => setCurrentView(APP_VIEW.LOGIN) }
                />
                <Button
                    title={ "REGISTER" }
                    onClick={ () => setCurrentView(APP_VIEW.REGISTER) }
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
