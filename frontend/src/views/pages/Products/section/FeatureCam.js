import React from 'react';
import styled from 'styled-components';
import FeatureSection from "./FeatureSection";

function FeatureCam (props) {

    const {} = props;

    return (
        <Container>
            <FeatureSection thumbnail={"PUFF EFFECT"}
                            title={"라이브를 \n 더욱 라이브답게!"}
                            description={"캐스터에서 지원하는 이펙트 아이템은\n누구나 손쉽게 사용할 수 있으며, 당신\n의 라이브를 마치 편집된 영상과 같이\n바꾸어줍니다."}
            />
            <FeatureSection thumbnail={"TEXT CUSTOMIZING"}
                            title={"생동감있는\n라이브 텍스트"}
                            description={"평범한 공지는 시청자의 눈길을 사로잡\n지 못합니다. 캐스터는 텍스트에도 다양\n한 시각적 효과를 사용할 수 있습니다. \n이제 더 생동감있는 라이브 텍스트를 입\n력해보세요."}
                            reverse={true}
            />
            <FeatureSection thumbnail={"MULTI - STRAMING"}
                            title={"여러 플랫폼에\n동시 송출하세요"}
                            description={"캐스터는 여러 라이브 플랫폼이 동시에 \n방송하는 멀티 스트리밍 기능을 지원합\n니다. 이제 하나의 라이브 플랫폼이 아닌\n여러 플랫폼에서 동시에 라이브를 진행\n해보세요."}
            />
        </Container>
    )
}

const Container = styled.div`
`
export default FeatureCam;