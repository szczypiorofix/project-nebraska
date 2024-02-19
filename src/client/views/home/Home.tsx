import React from 'react';

import AppContext from '../../context/AppContext';
import { APP_VIEW, AppContextType } from '../../types';
import { Button, Container } from '../../shared/components';

const Home: React.FC = () => {
    const { setView } = React.useContext(AppContext) as AppContextType;
    return (
        <Container>
            <Button title={ "ADMIN" } onClick={ () => setView(APP_VIEW.ADMIN) } ></Button>
        </Container>
    );
};

export default Home;
