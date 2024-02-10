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
import { validateEmail } from '../../../shared/validators';

interface UserLoginCredentials {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sendRequest, setSendRequest] = useState(false);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            console.error("Ivalid email");
            return;
        }

        setSendRequest(true);
    };

    useEffect(() => {
        const fetchResults = async (): Promise<void> => {
            if (!sendRequest) {
                return;
            }

            setSendRequest(false);

            const userCredentials: UserLoginCredentials = {
                email: email,
                password: password
            };

            try {
                const response: ServerResponse = await HttpService.post<UserLoginCredentials>("http://localhost:8080/api/login/", userCredentials);
                console.log(response);
                // todo: handle response
            } catch(err) {
                console.error(err);
            } finally {
                setPassword("");
                setEmail("");
                setSendRequest(false);
            }
        }

        if (sendRequest) {
            fetchResults()
                .then(() => {
                    console.log("Fetch results - finished.");
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }, [sendRequest]);

    return (
        <Container>
            <Row>
                <h1>Login</h1>
            </Row>
            <Row>
                <FormComponent onSubmit={handleSubmit}>
                    <InputGroupComponent>
                        <LabelComponent>E-mail:</LabelComponent>
                        <InputComponents type="text" value={email} onChange={handleEmailChange} />
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
