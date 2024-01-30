import React, { useState } from 'react';

import { Container, Row } from '../../shared/components';
import { 
    FormComponent,
    InputComponents,
    LabelComponent,
    SubmitButtonComponent
} from './Login.style';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle login logic here
    };

    return (
        <Container>
            <Row>
                <h1>Login</h1>
            </Row>
            <Row>
                <FormComponent onSubmit={handleSubmit}>
                    <LabelComponent>Username:</LabelComponent>
                    <InputComponents type="text" value={username} onChange={handleUsernameChange} />
                    <br />
                    <LabelComponent>Password:</LabelComponent>
                    <InputComponents type="password" value={password} onChange={handlePasswordChange} />
                    <br />
                    <SubmitButtonComponent type="submit">Login</SubmitButtonComponent>
                </FormComponent>
            </Row>
        </Container>
    );
};

export default Login;
