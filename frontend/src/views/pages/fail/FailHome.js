import React from 'react';
import styled from 'styled-components';
import LoginTitle from "../../components/LoginTitle";
import {ContentContainer} from "../../components/Components.Styled";
import {Images} from "../../../images";
import {Color, pxToRem} from "../../../lib/Styled";
import Info from "../../components/Footer/Info";
import {Button} from "../../components/Button/Button.Styled";
import FormStyled from "../../components/Form.Styled";

function FailHome (props) {

    const {} = props;

    return (
        <Container>
            <FormStyled>
                <Image src={Images.img_error} alt="에러 이미지"/>
                <LoginTitle title={`요청하신 페이지를 \n 바르게 표시할 수 없습니다`}
                            description={"서비스 이용에 불편을 드려 죄송합니다.\n잠시 후 다시 시도해 주십시오."}
                />
                <Button sort={"caster"} line>홈페이지로 돌아가기</Button>
            </FormStyled>

            <Info/>
        </Container>
    )
}

const Container = styled.div`
`
const Image = styled.img`
    margin-bottom: ${pxToRem(35)};
`;

export default FailHome;