import React, { useCallback, useState } from 'react';
import { Container, Row } from '../../shared/components';
import {
    FormComponent,
    InputComponents,
    InputGroupComponent,
    LabelComponent,
    SubmitButtonComponent
} from '../login/Login.style';
import { validateEmail } from '../../../shared';
import HttpService from '../../services/HttpService';
import { registerRoute } from '../../router';
import { RegisterUserServerResponse } from '../../../server/routes/users/models/register.model';

interface UserRegisterCredentials {
    email: string;
    password: string;
    password2: string;
}

const Register: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");
    const [errorMsg, setErrorMsg] = useState<string>("");

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (password !== password2) {
            setErrorMsg("Hasła nie są takie same!");
            return;
        }
        if (!validateEmail(email)) {
            setErrorMsg("Email ma niepoprawny format");
            return;
        }
        const userCredentials: UserRegisterCredentials = {
            email: email,
            password: password,
            password2: password2
        };

        HttpService.post<UserRegisterCredentials, RegisterUserServerResponse>(registerRoute, userCredentials)
            .then((response) => {
                console.log(response);
                if (response.error) {
                    setErrorMsg(response.message);
                }
            })
            .catch(err => {
                console.error(err);
                setEmail("");
                setPassword("");
                setPassword2("");
                setErrorMsg(err);
            });
    },[email, password, password2]);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setErrorMsg("");
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setErrorMsg("");
        setPassword(event.target.value);
    };

    const handlePassword2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setErrorMsg("");
        setPassword2(event.target.value);
    };

    return (
        <Container>
            <Row>
                <h1>Rejestracja</h1>
            </Row>
            <Row>
                <FormComponent onSubmit={handleSubmit}>
                    <InputGroupComponent>
                        <LabelComponent>E-mail:</LabelComponent>
                        <InputComponents type="text" value={email} onChange={handleEmailChange} autoComplete="email" />
                    </InputGroupComponent>
                    <InputGroupComponent>
                        <LabelComponent>Hasło:</LabelComponent>
                        <InputComponents type="password" value={password} onChange={handlePasswordChange} />
                    </InputGroupComponent>
                    <InputGroupComponent>
                        <LabelComponent>Powtórz hasło:</LabelComponent>
                        <InputComponents type="password" value={password2} onChange={handlePassword2Change} />
                    </InputGroupComponent>
                    { errorMsg.length > 0 && (
                        <p>{errorMsg}</p>
                    )}
                    <SubmitButtonComponent type="submit">Zarejestruj się</SubmitButtonComponent>
                </FormComponent>
            </Row>
        </Container>
    )
}

export default Register;
