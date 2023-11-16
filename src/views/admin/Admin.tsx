import React from 'react';

import { Row } from '../../shared/components/Row';
import { Navbar } from '../../shared/components/Navbar';
import { Button } from '../../shared/components/Button';
import { Footer } from '../../shared/components/Footer';
import { NetworkIndicator } from './parts/NetworkIndicator';

export const Admin = (): React.JSX.Element => {
    return <Row>
        <Navbar>
            <h2>Main menu</h2>
        </Navbar>
        <h1>ADMIN PANEL</h1>
        <div>
            <Button
                title={ "Connect" }
                onClick={ () => {
                    console.log('click');
                }}
            ></Button>
        </div>
        <Footer>
            <NetworkIndicator active />
        </Footer>
    </Row>
}
