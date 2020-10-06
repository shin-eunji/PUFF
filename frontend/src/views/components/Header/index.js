import React from 'react';
import styled from 'styled-components';
import Nav from "./Nav";
import Member from "./Member";
import {withRouter} from "react-router-dom";
import {Color, pxToRem} from "../../../lib/Styled";

function Header (props) {

    const {
    } = props;

    return (
        <Container>
            <Logo>puff</Logo>
            <Gnb>
                <Nav/>
                <Member/>
            </Gnb>
        </Container>
    )
}


const Container = styled.div`
  height: ${pxToRem(80)};
  background: ${Color.DARK};
`
const Logo = styled.div`
`;
const Gnb = styled.div`
    
`;
export default withRouter(Header);