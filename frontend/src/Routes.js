import React from 'react';
import styled from 'styled-components';
import {Route, Switch, Redirect, withRouter} from "react-router-dom";

import Products from "./views/pages/Products";
import LoginRoute from "./views/pages/Login";
import Price from "./views/pages/Price";
import AllComponents from "./views/components/All/index";
import Fail from "./views/pages/fail";
import Join from "./views/pages/Login/Join";


function Routes (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route path={'/products'} component={Products} />
                <Route path={'/price'} component={Price} />
                <Route path={'/login'} component={LoginRoute} />
                <Route path={'/join'} component={Join} />
                <Route path={'/all'} component={AllComponents} />
                <Route path={'/fail'} component={Fail} />

                <Redirect from={'/'} to={'/products/caster'}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Routes;