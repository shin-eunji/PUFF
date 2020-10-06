import React from 'react';
import styled from 'styled-components';
import Nav from "./Nav";
import Member from "./Member";
import {withRouter} from "react-router-dom";
import {ContentContainer} from "../Components.Styled";
import {Color, pxToRem} from "../../../lib/Styled";

function Header (props) {

    const {
    } = props;

    return (
        <Container>
            <SContentContainer>
                <Logo>puff</Logo>
                <Gnb>
                    <Nav/>
                    <Member/>
                </Gnb>
            </SContentContainer>
        </Container>
    )
}


const Container = styled.div`
    background: ${Color.DARK};
`
const SContentContainer = styled(ContentContainer)`
    display:flex;
    align-items:center;
    justify-content: space-between;
    height: ${pxToRem(80)};
`;
const Logo = styled.div`
    color: #fff;
    font-weight: 900;
    font-size: ${pxToRem(24)};
    text-transform: uppercase;
    display:flex;
    align-items:center;
`;
const Gnb = styled.div`
    display:flex;
    align-items:center;
`;
export default withRouter(Header);