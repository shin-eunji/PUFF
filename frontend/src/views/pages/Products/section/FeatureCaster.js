import React from 'react';
import styled from 'styled-components';
import FeatureSection from "./FeatureSection";
import cn from "classnames";
import {ContentContainer} from "../../../components/Components.Styled";
import {Color, pxToRem} from "../../../../lib/Styled";
import cam_icn_camera from "../../../../images/icons/main_cam_icn_camera.svg";
import {Images} from "../../../../images";

function FeatureCaster (props) {

    const {
        reverse
    } = props;

    return (
        <Container>
            <SContentContainer>
                <Text className={cn({reverse})}>
                    <h5>PUFF CAM</h5>
                    <h2>ABCD캐스터와 호환되는 ABCD캠은</h2>
                    <p>높은 품질의 영상 전송으로 퀄리티 높은 스트리밍이 가능합니다</p>
                </Text>
                <Preview></Preview>
                <Gnb>
                    <Nav>
                        <img src={Images.cam_icn_camera} alt="camera"/>
                        <p>아이폰으로 촬영하는 화면을 캡쳐하여<br/>다양한 라이브 방송 플랫폼으로<br/>스트리밍이 가능합니다.</p>
                    </Nav>
                    <Nav>
                        <img src={Images.cam_icn_interactive} alt="interactive"/>
                        <p>필터와 효과를 활용하여 <br/>시청자들과 인터랙티브한 <br/>라이브 스트리밍을 해보세요.</p>
                    </Nav>
                    <Nav>
                        <img src={Images.cam_icn_game} alt="game"/>
                        <p>게임, 쇼핑등의 화면을 캡쳐하여<br/>라이브 스트리밍이 가능합니다.</p>
                    </Nav>
                </Gnb>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
    margin: 150px 0;  
`
const SContentContainer = styled(ContentContainer)`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const Text = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom: 60px;
    h5 {
        color: ${Color.TOPAZ};
        font-size: ${pxToRem(18)};
        font-weight: 900;
        margin-bottom: 20px;
    }
    h2 {
        color: #000;  
        font-size: ${pxToRem(42)};
        font-weight: 900;
        line-height: 1.2;
        margin-bottom: ${pxToRem(30)};
    }
    p {
        color: #222;
        font-size: ${pxToRem(20)};
        font-weight: 400;
        font-stretch: normal;
        line-height: 1.8;
    }
    .reverse & {
        margin-left: 60px;
        margin-right: 0;
    }
`;
const Preview = styled.div`
    width: ${pxToRem(760)};
    height: ${pxToRem(500)};
    border-radius: ${pxToRem(6)};
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.2);
    background-color: #272c33;
`;
const Gnb = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    margin-top: 80px;
`;
const Nav = styled.nav`
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: center;
    width: ${pxToRem(340)};
    height: ${pxToRem(200)};
    img {
        width: ${pxToRem(80)};
        height: ${pxToRem(60)};
        margin-bottom: ${pxToRem(30)};
    }
    p {
        color: #222;
        font-size: ${pxToRem(20)};
        line-height: 1.6;
        font-weight: 400;
        text-align:center;
    }
`;
export default FeatureCaster;