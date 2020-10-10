import React from 'react';
import styled from 'styled-components';
import {ContentContainer} from "../../components/Components.Styled";
import LoginText from "../../components/LoginText";
import {Color, pxToRem} from "../../../lib/Styled";
import Info from "../../components/Footer/Info";
import LoginForm from "./LoginForm";


function Login (props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <LoginText title={"환영합니다 :D"}
                           description={"다시 만나서 반가워요!"}
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
export default Login;