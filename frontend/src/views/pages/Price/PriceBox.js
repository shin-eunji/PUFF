import React from 'react';
import styled from 'styled-components';
import {Color, pxToRem} from "../../../lib/Styled";
import {Button} from "../../components/Button/Button.Styled";
import PriceCheck from "./PriceCheck";

function PriceBox (props) {

    const {
        title,
        description,
        price,
        buybutton,
        sort,
        full,
    } = props;

    return (
        <Container>
            <Text>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Price>
                    {price}
                    <p>one time payment</p>
                </Price>
            </Text>

            <PriceCheck/>

            <BuyButton sort={sort} full={full}>
                {buybutton}
            </BuyButton>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    width: ${pxToRem(360)};
    height: ${pxToRem(580)};
    border-radius: ${pxToRem(10)};
    background: #fff;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content: flex-start;
    padding: 40px;
`
const Text = styled.div`
    flex: 1;
`;
const Title = styled.div`
    font-size: ${pxToRem(24)};
    font-weight: bold;
    margin-bottom: ${pxToRem(13)};
`;
const Description = styled.div`
    font-size: ${pxToRem(14)};
    font-weight: 500;
    color: #888;
    line-height: 1.3;
`;
const Price = styled.div`
    font-size: ${pxToRem(45)};
    font-weight: 900;
    margin-top: 26px;
    line-height: 1.1;
    p {
       color: ${Color.TOPAZ};
       font-size: ${pxToRem(18)};
    }
`;
const BuyButton = styled(Button)`
    position:relative;
    bottom: 0;
`;
export default PriceBox;