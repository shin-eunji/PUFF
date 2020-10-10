import React from 'react';
import styled from 'styled-components';
import LoginText from "../../components/LoginText";
import {ContentContainer} from "../../components/Components.Styled";
import {Images} from "../../../images";
import {Color, pxToRem} from "../../../lib/Styled";
import Info from "../../components/Footer/Info";
import {ButtonCom} from "../../components/Button/Button.Styled";

function Fail (props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <img src={Images.img_error} alt=""/>
                <LoginText title={"결제에 실패하였습니다"}
                           description={"서비스 이용에 불편을 드려 죄송합니다.\n잠시 후 다시 시도해 주십시오."}
                />
                <ButtonCom size={"small"} sort={"caster"} line>홈페이지로 돌아가기</ButtonCom>
            </SContentContainer>

            <Info/>
        </Container>
    )
}

const Container = styled.div`
background: ${Color.DARK};
`
const SContentContainer = styled(ContentContainer)`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height: calc(100vh - ${pxToRem(226)});
`;
export default Fail;