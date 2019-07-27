import React, {useState} from 'react'
import {RouteComponentProps, withRouter} from 'react-router';
import {login} from "../services/auth";
import Input from "../components/Input";
import Button from "../components/Button";
import Title from "../components/Title";
import Container from "../components/Container";
import LinkText from "../components/LinkText";
import LoginWithGoogle from "../components/LoginWithGoogle";

const Register = ({history}: RouteComponentProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = () => {
        setLoading(true);
        login(email, password)
            .then(res => {
                setTimeout(() => history.push("/"), 1000)
            })
            .catch(err => {
                setLoading(false);
                console.log(err)
            });
    };

    return (
        <Container>
            <Title text="Login"/>
            <Input
                onChange={setEmail}
                value={email}
                id="email"
                label="Email"
                placeholder="Enter your email"
                type="email"
            />
            <Input
                onChange={setPassword}
                id="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
            />
            <Button
                name={loading ? "Loading..." : "Login"}
                size="large"
                onClick={onSubmit}
                disabled={loading}
            />
            <LinkText text="Don't have an account? Register!" to="/register" />
            <LoginWithGoogle />
        </Container>
    )
};

export default withRouter(Register);
