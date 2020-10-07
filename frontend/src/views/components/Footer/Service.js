import React from 'react';
import styled from 'styled-components';
import {Color, pxToRem} from "../../../lib/Styled";
import {ContentContainer} from "../Components.Styled";
import {Images} from "../../../images";
import {Button} from "../Button/Button.Styled";

function Service (props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <Download>
                    <Button className={'download'}
                            sort={'caster'}
                            size={'large'}
                    >
                        <img src={Images.download} alt="다운로드"/>
                        PUFFCASTER 다운로드
                    </Button>
                    <div className="caution">Window 64비트 또는 그 이상 (Ver. 10.13.5)</div>
                </Download>
                <Text>지금 바로 당신의 라이브를 시작해보세요!</Text>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
    background: ${Color.DARK};
    height: ${pxToRem(390)};
    width: 100%;
`
const SContentContainer = styled(ContentContainer)`
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height: 100%;
    width: 100%;
    &::before {
      content: '';
      position: absolute;
      top: ${pxToRem(30)};
      left: 0;
      width: ${pxToRem(300)};
      height: ${pxToRem(330)};
      background: url(${Images.visual_parttern1}) 0  0 / 100% no-repeat;
    }
    &::after {
      content: '';
      position: absolute;
      top: ${pxToRem(30)};
      right: 0;
      width: ${pxToRem(390)};
      height: ${pxToRem(330)};
      background: url(${Images.visual_parttern2}) 0  0 / 100% no-repeat;
    }
`;
const Download = styled.div`
    margin-top: ${pxToRem(140)};
    .download {
        width: ${pxToRem(240)};
        flex: 2;
        img {
            margin-right: ${pxToRem(8)};
        }
    }
    .caution {
        font-size: ${pxToRem(14)};
        font-weight: 300;
        color: #777;
        line-height: 2.6;
    }
`;
const Text = styled.div`
        font-size: ${pxToRem(24)};
        color: #fff;
        font-weight: 300;
        margin-top: ${pxToRem(62)};
        margin-bottom: ${pxToRem(70)};
`;
export default Service;