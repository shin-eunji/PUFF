import React from 'react';
import styled from 'styled-components';
import Visual from "./section/Visual";
import {Images} from "../../../images";
import Features from "./section/Features";

function Caster(props) {

    const {} = props;

    return (
        <Container>
            <Visual sort={"caster"}
                    title={"지금까지 볼 수 없었던,\n라이브 스트리밍 프로그램"}
                    description={"Caster의 특별한 기능들을 사용하여 지금까지 경험해보지 못한\n특별한 라이브 스트리밍을 만들어보세요"}
                    downlaodIcon={Images.download}
                    download={"PUFFCASTER 다운로드"}
                    caution={"Window 64비트 또는 그 이상 (Ver. 10.13.5)"}
                    thumbnail={Images.visual}
            />

            <Features/>
        </Container>
    )
}

const Container = styled.div`
`
export default Caster;