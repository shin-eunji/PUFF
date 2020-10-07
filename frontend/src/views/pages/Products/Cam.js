import React from 'react';
import styled from 'styled-components';
import Visual from "./section/Visual";
import {Images} from "../../../images";
import FeatureCam from "./section/FeatureCam";
import Footer from "../../components/Footer";

function Cam(props) {

    const {} = props;

    return (
        <Container>

            <Visual sort={"cam"}
                    title={"아이폰으로\n라이브 스트리밍을"}
                    description={"PUFF CAM의 독자적인 기술력으로 별도의 장비 없이 아이폰으로 라이브 스트리밍하세요."}
                    downlaodIcon={Images.apple_icn}
                    download={"App Store 다운로드"}
                    caution={"iPhone X 이상 (iOS 13.5 이상)"}
                    thumbnail={Images.visual_caster}
                    more={"가이드 영상 보기"}
            />
            <FeatureCam/>
            <Footer sort={"cam"}
                    downlaodIcon={Images.apple_icn}
                    footerButton={"App Store 다운로드"}
                    caution={"iPhone X 이상 (iOS 13.5 이상)"}
            />
        </Container>
    )
}

const Container = styled.div`
`
export default Cam;