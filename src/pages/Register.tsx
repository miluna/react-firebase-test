import React, {useState} from 'react'
import {RouteComponentProps, withRouter} from 'react-router';
import {register} from "../services/auth";
import Input from "../components/Input";
import Button from "../components/Button";
import Title from "../components/Title";
import Container from "../components/Container";
import LinkText from "../components/LinkText";

const Register = ({history}: RouteComponentProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = () => {
        setLoading(true);
        register(email, password)
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
            <Title text="Register"/>
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
                name={loading ? "Loading..." : "Register"}
                size="large"
                onClick={onSubmit}
            />
            <LinkText text="Already have an account? Log in!" to="/login" />
        </Container>
    )
};

export default withRouter(Register);
