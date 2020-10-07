import React from 'react';
import styled from 'styled-components';
import FeatureSection from "./FeatureSection";

function FeaturePlay(props) {

    const {} = props;

    return (
        <Container>
            <FeatureSection thumbnail={"COME TOGETHER"}
                            title={"시청자와 가까워지는 인터랙티브"}
                            description={"퍼프 플레이는 새로운 방식을 통해 스트리머와 시청자를 즐겁게 합니다. 함께 즐길 수 있는 퍼프 플레이로 스트리머와 시청자를 더 가깝게 만들 수 있습니다."}
            />
            <FeatureSection thumbnail={"EASY-PEASY"}
                            title={"쉽게 시청자와\n소통할 수 있는 방법"}
                            description={"시청자와의 소통은 언제나 큰 고민입니다. 간단한 퍼프 플레이 세팅으로 스트리머는 고민을 없애고 팬들과 새로운 방식의 커뮤니케이션을 경험할 수 있습니다."}
                            reverse={true}
            />
            <FeatureSection thumbnail={"BETTER EXPERIENCE"}
                            title={"새로운 경험을 시청자에게 전달"}
                            description={"퍼프 플레이는 스트리머와 시청자에게 새로운 경험을 전달합니다. 다양한 형식의 퍼프 플레이를 통해 새로운 경험을 라이브 할 수 있습니다."}
            />
        </Container>
    )
}

const Container = styled.div`
`
export default FeaturePlay;