import React from 'react';

import { AppContext } from '../../context/AppContext';
import { APP_VIEW, AppContextType } from '../../types/app';

import { Container } from '../../shared/components/Container';
import { Button } from '../../shared/components/Button';

export const Home: React.FC = () => {
    const { setView } = React.useContext(AppContext) as AppContextType;
    return (
        <Container>
            <Button title={ "ADMIN" } onClick={ () => setView(APP_VIEW.ADMIN) } ></Button>
        </Container>
    );
};
