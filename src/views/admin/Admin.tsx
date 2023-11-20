import React, { useState, useEffect } from 'react';

import { Row } from '../../shared/components/Row';
import { Navbar } from '../../shared/components/Navbar';
import { Button } from '../../shared/components/Button';
import { Footer } from '../../shared/components/Footer';
import { NetworkIndicator } from './parts/NetworkIndicator';
import { Container } from '../../shared/components/Container';

export const Admin = (): React.JSX.Element => {
    const [serverStatusOk, setServerStatusOk] = useState<boolean>(false);
    useEffect(() => {
        if (!serverStatusOk) {
            fetch("http://localhost:8080/api/status/")
                .then(resp => resp.json())
                .then(r => {
                    console.log(r);
                })
                .catch(err => {
                    console.error(err);
                });
            setServerStatusOk(true);
        }
    }, []);
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
                    console.log('click');
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
