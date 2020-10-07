import React from 'react';
import styled from 'styled-components';
import Routes from "./Routes";
import Header from "./views/components/Header";
import {Switch, Route} from "react-router-dom";
import Login from "./views/pages/Login";



function App (props) {

    const {} = props;

    return (
        <Container>
            <Header/>
            <Routes/>
        </Container>
    )
}

const Container = styled.div`
`
export default App;