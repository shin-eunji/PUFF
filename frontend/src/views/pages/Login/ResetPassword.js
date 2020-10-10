
import React from 'react';
import styled from 'styled-components';
import LoginText from "../../components/LoginText";
import Form from "../../components/Form/Form";
import Info from "../../components/Footer/Info";
import {Color, pxToRem} from "../../../lib/Styled";
import {ContentContainer} from "../../components/Components.Styled";

function ResetPassword (props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <LoginText title={"새로운 비밀번호를 입력하세요"}
                           description={""}
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
export default ResetPassword;