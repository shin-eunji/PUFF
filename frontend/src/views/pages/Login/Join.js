import React from 'react';
import styled from 'styled-components';
import LoginText from "../../components/LoginText";
import LoginForm from "./LoginForm";
import Info from "../../components/Footer/Info";
import {ContentContainer} from "../../components/Components.Styled";
import {Color, pxToRem} from "../../../lib/Styled";

function Join (props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <LoginText title={""}
                           description={"계정 만들기"}
                />
                <LoginForm/>
            </SContentContainer>

            <Info/>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    background: ${Color.DARK};
`
const SContentContainer = styled(ContentContainer)`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    height: calc(100vh - ${pxToRem(226)});
`;
export default Join;