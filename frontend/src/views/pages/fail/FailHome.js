import React from 'react';
import styled from 'styled-components';
import LoginTitle from "../../components/LoginTitle";
import {ContentContainer} from "../../components/Components.Styled";
import {Images} from "../../../images";
import {Color, pxToRem} from "../../../lib/Styled";
import Info from "../../components/Footer/Info";
import {Button} from "../../components/Button/Button.Styled";

function FailHome (props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <img src={Images.img_error} alt=""/>
                <LoginTitle title={`요청하신 페이지를 \n 바르게 표시할 수 없습니다`}
                            description={"서비스 이용에 불편을 드려 죄송합니다.\n잠시 후 다시 시도해 주십시오."}
                />
                <Button size={"small"} sort={"caster"} line>홈페이지로 돌아가기</Button>
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
export default FailHome;