import React from 'react';
import styled from 'styled-components';
import {Switch, Route} from "react-router-dom";
import Caster from "./Caster";
import Play from "./Play";
import Cam from "./Cam";

function Products (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route path={'/products/caster'} component={Caster}/>
                <Route path={'/products/play'} component={Play}/>
                <Route path={'/products/cam'} component={Cam}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Products;