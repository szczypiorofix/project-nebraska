import React, { useEffect } from 'react';

import { Row } from '../../shared/components/Row';
import { Navbar } from '../../shared/components/Navbar';
import { Button } from '../../shared/components/Button';
import { Footer } from '../../shared/components/Footer';
import { NetworkIndicator } from './parts/NetworkIndicator';
import { Container } from '../../shared/components/Container';
import { useAPIRequest } from '../../hooks/useAPIRequest';
import { ServerResponse } from '../../../shared/response.model';

export const Admin = (): React.JSX.Element => {
    const [ execute, response, loading, hasError, errorMessage ] = useAPIRequest<ServerResponse>(
        "http://localhost:8080/api/status",
        {
            error: false,
            code: -1,
            message: ""
        }
    );

    useEffect(() => {
        console.log(response);
        console.log(loading);
        console.log(hasError);
        console.log(errorMessage);
    }, [response, hasError]);

    return <Row>
        <Navbar>
            <h2>Main menu</h2>
        </Navbar>
        <Container>
            <h1>ADMIN PANEL</h1>
        </Container>
        <Container>
            <Button
                title={ "Connect" }
                onClick={ () => {
                    execute({});
                }}
            ></Button>
        </Container>
        <Footer>
            <Container>
                <NetworkIndicator isActive={ true }/>
            </Container>
        </Footer>
    </Row>
}
