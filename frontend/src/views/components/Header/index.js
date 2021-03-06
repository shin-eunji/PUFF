import React from 'react';
import styled from 'styled-components';
import Nav from "./Nav";
import Member from "./Member";
import {withRouter} from "react-router-dom";
import {ContentContainer} from "../Components.Styled";
import {Color, pxToRem} from "../../../lib/Styled";
import {navigate} from "../../../lib/History";

function Header (props) {

    const {
        location
    } = props;

    return (
        <Container>
            <SContentContainer>
                <Logo to={() => navigate('/products/caster')}>puff</Logo>
                <Gnb>
                    <Nav location={location}/>
                    <Member/>
                </Gnb>
            </SContentContainer>
        </Container>

    )
}


const Container = styled.div`
    background: ${Color.DARK};
    position:relative;
    z-index: 2000;
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
    cursor: pointer;
`;
const Gnb = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-around;
`;
export default withRouter(Header);