import React, { useState } from 'react';

import { Row } from '../../shared/components/Row';
import { Navbar } from '../../shared/components/Navbar';
import { Button } from '../../shared/components/Button';
import { Footer } from '../../components/Footer';
import { NetworkIndicator } from './parts/NetworkIndicator';
import { Container } from '../../shared/components/Container';
import useRequest from '../../hooks/useRequest';
import { ServerResponse } from '../../../shared/response.model';

export enum CONNECTION_STATUS {
    DISCONNECTED = "rozłączony",
    CONNECTING = "łączenie",
    CONNECTED = "połączony"
}

export const Admin = (): React.JSX.Element => {
    const [connectionStatus, setConnectionStatus] = useState<CONNECTION_STATUS>(CONNECTION_STATUS.DISCONNECTED);
    const [dbConnectionStatus, setDBConnectionStatus] = useState<CONNECTION_STATUS>(CONNECTION_STATUS.DISCONNECTED);
    return <Row>
        <Navbar>
            <h2>Main menu</h2>
        </Navbar>
        <Container>
            <h1>ADMIN PANEL</h1>
        </Container>
        <Container flex={true}>
            <Button
                title={ "Server" }
                onClick={ () => {
                    setConnectionStatus(CONNECTION_STATUS.CONNECTING);
                    (async () => {
                        try {
                            const response: ServerResponse = await useRequest<ServerResponse>("http://localhost:8080/api/status/server", {});
                            console.log(response);
                            setConnectionStatus(CONNECTION_STATUS.CONNECTED);
                        } catch(err) {
                            console.error(err);
                            setConnectionStatus(CONNECTION_STATUS.DISCONNECTED);
                        }
                    })();
                }}
            ></Button>
            <p>{ connectionStatus }</p>
            <NetworkIndicator status={ connectionStatus }/>
        </Container>
        <Container flex={true}>
            <Button
                title={ "MongoDB" }
                onClick={ () => {
                    setDBConnectionStatus(CONNECTION_STATUS.CONNECTING);
                    (async () => {
                        try {
                            const response: ServerResponse = await useRequest<ServerResponse>("http://localhost:8080/api/status/mongodb", {});
                            console.log(response);
                            setDBConnectionStatus(CONNECTION_STATUS.CONNECTED);
                        } catch(err) {
                            console.error(err);
                            setDBConnectionStatus(CONNECTION_STATUS.DISCONNECTED);
                        }
                    })();
                }}
            ></Button>
            <p>{ dbConnectionStatus }</p>
            <NetworkIndicator status={ dbConnectionStatus }/>
        </Container>
        <Footer>
        </Footer>
    </Row>
}
