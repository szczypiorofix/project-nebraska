import React, { useState } from 'react';

import { NetworkIndicator } from './parts/NetworkIndicator';
import HttpService from '../../services/HttpService';
import { CONNECTION_STATUS, ServerResponse } from '../../../shared';
import { Button, Container, Row } from '../../shared/components';
import ListOfUsers from './parts/ListOfUsers';

const Admin = (): React.JSX.Element => {
    const [connectionStatus, setConnectionStatus] = useState<CONNECTION_STATUS>(CONNECTION_STATUS.DISCONNECTED);
    const [dbConnectionStatus, setDBConnectionStatus] = useState<CONNECTION_STATUS>(CONNECTION_STATUS.DISCONNECTED);
    return <Row>
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
                            const response: ServerResponse = await HttpService.get("http://localhost:8080/api/status/server");
                            console.log(response);
                            setConnectionStatus(CONNECTION_STATUS.CONNECTED);
                        } catch(err) {
                            console.error(err);
                            setConnectionStatus(CONNECTION_STATUS.DISCONNECTED);
                        }
                    })();
                } }
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
                            const response: ServerResponse = await HttpService.get("http://localhost:8080/api/status/mongodb");
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
        <Container>
            <ListOfUsers />
        </Container>
    </Row>
}

export default Admin;;
