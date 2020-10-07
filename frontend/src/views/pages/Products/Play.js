import React from 'react';
import styled from 'styled-components';
import Visual from "./section/Visual";
import {Images} from "../../../images";
import FeaturePlay from "./section/FeaturePlay";
import Footer from "../../components/Footer";

function Cam(props) {

    const {
        sort
    } = props;

    return (
        <Container>

            <Visual sort={"play"}
                    title={"새로운 커뮤니케이션을\n경험하세요"}
                    description={"퍼프 플레이를 사용하여 시청자가 참여할 수 있는 재미있는 라이브 스트리밍을 해보세요"}
                    downlaodIcon={Images.download}
                    download={"퍼프 플레이 사용해보기"}
                    thumbnail={Images.visual_play}
                    more={"가이드 영상 보기"}
            />

            <FeaturePlay/>

            <Footer sort={"play"}
                    footerButton={"퍼프 플레이 사용해보기"}
                    downlaodIcon={Images.download}
            />

        </Container>
    )
}

const Container = styled.div`
`
export default Cam;