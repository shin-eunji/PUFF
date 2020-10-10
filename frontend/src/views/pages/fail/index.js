import React from 'react';
import styled from 'styled-components';
import {Switch, Route} from "react-router-dom";
import FailHome from "./FailHome";
import FailText from "./FailText";

function Fail (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route path={"/fail/home"} component={FailHome}/>
                <Route path={"/fail/text"} component={FailText}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`

export default Fail;