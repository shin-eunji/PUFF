import React from 'react';
import styled from 'styled-components';
import Info from "../../components/Footer/Info";
import PriceContent from "./PriceContent";

function Price (props) {

    const {} = props;

    return (
        <Container>
            <PriceContent/>
            <Info/>
        </Container>
    )
}

const Container = styled.div`
`
export default Price;