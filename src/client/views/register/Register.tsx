import React, { useEffect, useState } from 'react';
import { Container, Row } from '../../shared/components';
import {
    FormComponent,
    InputComponents,
    InputGroupComponent,
    LabelComponent,
    SubmitButtonComponent
} from '../login/Login.style';
import { validateEmail } from '../../../shared/validators';
import { ServerResponse } from '../../../shared';
import HttpService from '../../services/HttpService';

interface UserRegisterCredentials {
    email: string;
    password: string;
    password2: string;
}

const Register: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");
    const [sendRequest, setSendRequest] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string>("");

    const register = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handlePassword2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword2(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (password !== password2) {
            console.error("Passwords does not match!");
            return;
        }
        if (!validateEmail(email)) {
            console.error("Invalid email");
            return;
        }
        setSendRequest(true);
    };

    useEffect(() => {
        const fetchResults = async (): Promise<void> => {
            setSendRequest(false);
            const userCredentials: UserRegisterCredentials = {
                email: email,
                password: password,
                password2: password2
            };
            try {
                HttpService.post<UserRegisterCredentials>(
                    "http://localhost:8080/api/register/",
                    userCredentials
                )
                    .then((response) => {
                        console.log(response);
                        if (response.error) {
                            setErrorMsg(response.message);
                        }
                    })
                    .catch(err => {
                        setErrorMsg(err);
                    });
            } catch(err) {
                console.error(err);
            } finally {
                setEmail("");
                setPassword("");
                setPassword2("");
                setSendRequest(false);
            }
        }
        if (sendRequest) {
            fetchResults()
                .then(() => {
                    // console.log("User registered.");
                 })
                .catch(err => {
                    console.error(err);
                });
        }
    }, [sendRequest]);

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
