import React from 'react';
import styled from 'styled-components';
import {ContentContainer} from "../Components.Styled";
import InfoNav from "./InfoNav";
import Languages from "./Languages";
import {pxToRem} from "../../../lib/Styled";

function Info (props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <InfoContainer>
                    <Gnb>
                        <Logo>puff</Logo>
                        <InfoNav/>
                    </Gnb>
                </InfoContainer>
                <Languages/>
                <Copyright>
                    <p>Copyright ©Starship Vending-machine. All rights reserved.</p>
                </Copyright>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
    background: #000;
`
const SContentContainer = styled(ContentContainer)`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    padding: 50px 0;  
`;
const InfoContainer = styled.div`
    display:flex;
    justify-content:center;
    width: 100%;
    margin-bottom: 18px;
`;
const Gnb = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;
const Logo = styled.div`
    color: #fff;
    font-size: ${pxToRem(14)};
    font-weight: 900;
    text-transform: uppercase;
    margin-right: ${pxToRem(30)};
`;

const Copyright = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    
    p {
        color: #555;
        font-size: ${pxToRem(14)};
        font-weight: 300;
    }
`;

export default Info;