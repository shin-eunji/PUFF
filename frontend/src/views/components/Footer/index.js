import React from 'react';
import styled from 'styled-components';
import Service from "./Service";
import Info from "./Info";

function Footer (props) {

    const {} = props;

    return (
        <Container>
            <Service/>
            <Info/>
        </Container>
    )
}

const Container = styled.div`
`
export default Footer;