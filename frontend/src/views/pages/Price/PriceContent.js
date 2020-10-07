import React from 'react';
import styled from 'styled-components';
import {ContentContainer} from "../../components/Components.Styled";
import {Color, pxToRem} from "../../../lib/Styled";
import PriceBox from "./PriceBox";

function PriceContent(props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <Text>
                    <h2>프리미엄 플랜</h2>
                    <p>PUFF CASTER의 프리미엄 플랜 구매가 가능합니다. PUFF CASTER의 다양하고 특별한 기능들을 사용하시려면 플랜을 구매해주세요!</p>
                </Text>
                <PriceContainer>
                    <PriceBox title={"Standard"}
                              description={"PUFF CASTER의\n기본적인 기능들을 사용할 수 있습니다."}
                              price={"$0"}
                              buybutton={"무료로 사용하기"}
                              sort={"line"}
                              full={"full"}
                    />
                    <PriceBox title={"Professional"}
                              description={"PUFF CASTER의\n기본적인 기능들을 사용할 수 있습니다."}
                              price={"$249"}
                              buybutton={"구매하기"}
                              sort={"dark"}
                              full={"full"}
                    />
                    <PriceBox title={"Enterprise"}
                              description={"PUFF CASTER의\n기본적인 기능들을 사용할 수 있습니다."}
                              price={"$599"}
                              buybutton={"구매하기"}
                              sort={"dark"}
                              full={"full"}
                    />
                </PriceContainer>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
    background: ${Color.DARK};
`
const SContentContainer = styled(ContentContainer)`
    padding: ${pxToRem(80)} 0 ${pxToRem(150)};
`;
const PriceContainer = styled.div`
    display:flex;
    align-items:center;
`;
const Text = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    color: #fff;
    margin-bottom: 80px;
    h2 {
        font-size: ${pxToRem(42)};
        font-weight: 900;
        margin-bottom: ${pxToRem(20)};
    }
    p {
        font-size: ${pxToRem(20)};
        font-weight: 300;
    
    }
`;
export default PriceContent;