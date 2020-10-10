import React from 'react';
import styled from 'styled-components';
import LoginText from "../../components/LoginText";
import Info from "../../components/Footer/Info";
import {ContentContainer} from "../../components/Components.Styled";
import Form from "../../components/Form/Form";
import {Color, pxToRem} from "../../../lib/Styled";

function Password (props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <LoginText title={"비밀번호를 잊으셨나요?"}
                           description={"가입하신 이메일로 비밀번호를 보내드립니다."}
                />
                <Form/>
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
export default Password;