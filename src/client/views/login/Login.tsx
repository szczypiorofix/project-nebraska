import React, { useCallback, useState } from 'react';

import { Container, Row } from '../../shared/components';
import {
    FormComponent,
    InputComponents,
    InputGroupComponent,
    LabelComponent,
    SubmitButtonComponent
} from './Login.style';
import HttpService from '../../services/HttpService';
import { validateEmail } from '../../../shared';

interface UserLoginCredentials {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState<string>("");

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!validateEmail(email)) {
            console.error("Invalid email");
            return;
        }
        const userCredentials: UserLoginCredentials = {
            email: email,
            password: password
        };
        HttpService
            .post<UserLoginCredentials>("http://localhost:8080/api/login/", userCredentials)
            .then((response) => {
                console.log(response);
                if (response.error) {
                    setErrorMsg(response.message);
                }
            })
            .catch(err => {
                setEmail("");
                setPassword("");
                setErrorMsg(err);
            });
    },[email, password]);

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
                    { errorMsg.length > 0 && (
                        <p>{errorMsg}</p>
                    )}
                    <SubmitButtonComponent type="submit">Login</SubmitButtonComponent>
                </FormComponent>
            </Row>
        </Container>
    );
};

export default Login;
