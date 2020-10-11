import React from 'react';
import styled from 'styled-components';
import LoginTitle from "../../components/LoginTitle";
import {ContentContainer} from "../../components/Components.Styled";
import {Images} from "../../../images";
import {Color, pxToRem} from "../../../lib/Styled";
import Info from "../../components/Footer/Info";
import FormStyled from "../../components/Form.Styled";

function FailText(props) {

    const {} = props;

    return (
        <Container>
            <FormStyled>
                <Image src={Images.img_error} alt="에러 이미지"/>
                <LoginTitle title={`요청하신 페이지를 \n 바르게 표시할 수 없습니다`}
                            description={`서비스 이용에 불편을 드려 죄송합니다.\n잠시 후 다시 시도해 주십시오.`}
                />
                <Text>
                    {`원하시는 웹페이지를 찾을 수 없거나 다른 메뉴로 이동한 경우
                    서비스 수행 중 일시적인 장애가 발생한 경우
                    이동의 폭주로 서비스가 지연되는 경우
                    해당 페이지에 대한 접근이 허가되지 않은 경우`}
                </Text>
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
const Text = styled.p`
    color: #7e858b;
    font-size: ${pxToRem(15)};
    font-weight: 300;
    line-height: 1.5;
`;
export default FailText;