import React from 'react';
import styled from 'styled-components';
import {Route, Switch} from "react-router-dom";
import Login from "./Login";
import Password from "./Password";
import ResetPassword from "./ResetPassword";
import FormStyled from "../../components/Form.Styled";

function LoginRoute (props) {

    const {} = props;

    return (
        <Container>
            <FormStyled>
                <Switch>
                    <Route exact path={'/login'} component={Login}/>
                    <Route path={'/login/password'} component={Password} />
                    <Route path={'/login/resetpassword'} component={ResetPassword} />
                </Switch>
            </FormStyled>
        </Container>
    )
}

const Container = styled.div`
`
export default LoginRoute;