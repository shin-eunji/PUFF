import React from 'react';
import styled from 'styled-components';
import {Route, Switch} from "react-router-dom";
import Login from "./Login";
import Password from "./Password";
import ResetPassword from "./ResetPassword";

function LoginRoute (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route exact path={'/login'} component={Login}/>
                <Route path={'/login/password'} component={Password} />
                <Route path={'/login/resetpassword'} component={ResetPassword} />
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default LoginRoute;