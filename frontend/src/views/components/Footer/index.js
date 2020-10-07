import React from 'react';
import styled from 'styled-components';
import Service from "./Service";
import Info from "./Info";

function Footer (props) {

    const {
        sort,
        footerButton,
        caution,
        downlaodIcon
    } = props;

    return (
        <Container>
            <Service sort={sort}
                     footerButton={footerButton}
                     caution={caution}
                     downlaodIcon={downlaodIcon}
            />
            <Info/>
        </Container>
    )
}

const Container = styled.div`
`
export default Footer;