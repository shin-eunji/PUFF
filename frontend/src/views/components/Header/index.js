import React from 'react';
import styled from 'styled-components';
import Nav from "./Nav";
import Member from "./Member";
import {withRouter} from "react-router-dom";
import {ContentContainer} from "../Components.Styled";

function Header (props) {

    const {
    } = props;

    return (
        <Container>
            <ContentContainer>
                <Logo>puff</Logo>
                <Gnb>
                    <Nav/>
                    <Member/>
                </Gnb>
            </ContentContainer>
        </Container>
    )
}


const Container = styled.div`
`
const Logo = styled.div`
`;
const Gnb = styled.div`
    
`;
export default withRouter(Header);