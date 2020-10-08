import React from 'react';
import styled from 'styled-components';
import {Route, Switch} from "react-router-dom";
import Login from "./Login";

function LoginRoute (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route exact path={'/login'} component={Login}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default LoginRoute;