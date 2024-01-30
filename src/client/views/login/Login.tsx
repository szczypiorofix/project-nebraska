import React, { useEffect, useState } from 'react';

import { Container, Row } from '../../shared/components';
import { 
    FormComponent,
    InputComponents,
    InputGroupComponent,
    LabelComponent,
    SubmitButtonComponent
} from './Login.style';
import { ServerResponse } from '../../../shared';
import HttpService from '../../services/HttpService';
import { validateEmail } from '../../utils/validators';


interface UserCredentials {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [connectionStatus, setConnectionStatus] = useState(false);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle login logic here

        if (!validateEmail(email)) {
            console.error("Ivalid email");
            return;
        }

        setConnectionStatus(true);

    };

    useEffect(() => {
        const fetchResolts = async () => {

            setConnectionStatus(false);

            const userCredentials: UserCredentials = {
                email: email,
                password: password
            };

            try {
                const response: ServerResponse = await HttpService.post<UserCredentials>("http://localhost:8080/api/login/", userCredentials);
                console.log(response);
                // todo: handle response
            } catch(err) {
                console.error(err);
            } finally {
                setPassword("");
                setEmail("");
                setConnectionStatus(false);
            }
        }

        if (connectionStatus) {
            fetchResolts();
        }

    }, [connectionStatus, email, password]);

    return (
        <Container>
            <Row>
                <h1>Login</h1>
            </Row>
            <Row>
                <FormComponent onSubmit={handleSubmit}>
                    <InputGroupComponent>
                        <LabelComponent>E-mail:</LabelComponent>
                        <InputComponents type="email" value={email} onChange={handleEmailChange} />
                    </InputGroupComponent>
                    <InputGroupComponent>
                        <LabelComponent>Password:</LabelComponent>
                        <InputComponents type="password" value={password} onChange={handlePasswordChange} />
                    </InputGroupComponent>
                    <SubmitButtonComponent type="submit">Login</SubmitButtonComponent>
                </FormComponent>
            </Row>
        </Container>
    );
};

export default Login;
