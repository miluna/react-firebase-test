import React from 'react'
import {withRouter} from 'react-router';
import Container from "../components/Container";
import Title from "../components/Title";
import Button from "../components/Button";
import {logout} from "../services/auth";

const Home = () => (
    <Container>
        <Title text="Welcome"/>
        <p>This is the end of the demo. You reached the private endPoint. Congrats!</p>
        <Button name="Logout" size="large" onClick={logout}/>
    </Container>
);

export default withRouter(Home);
