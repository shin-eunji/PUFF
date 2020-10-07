import React from 'react';
import styled from 'styled-components';
import {Route, Switch, Redirect} from "react-router-dom";

import Products from "./views/pages/Products";
import Login from "./views/pages/Login";
import Price from "./views/pages/Price";


function Routes (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route path={'/products'} component={Products} />
                <Route path={'/price'} component={Price} />
                <Route path={'/login'} component={Login} />

                <Redirect from={'/'} to={'/products/caster'}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Routes;