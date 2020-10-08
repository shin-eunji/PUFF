import React, {useState} from 'react';
import styled from 'styled-components';
import {Images} from "../../../images";
import PriceItem from "./PriceItem";

function PriceCheck (props) {

    const {} = props;

    const prices = [
        {
            text: '일이삼사오육칠팔구십',
            url: Images.price_check_on,
            isChecked: false,
        },
        {
            text: '일이삼사오육칠팔구십',
            url: Images.price_check_on,
            isChecked: false,
        },
        {
            text: '일이삼사오육칠팔구십',
            url: Images.price_check_on,
            isChecked: false,
        },
        {
            text: '일이삼사오육칠팔구십',
            url: Images.price_check_on,
            isChecked: false,
        },
        {
            text: '일이삼사오육칠팔구십',
            url: Images.price_check_off,
            isChecked: true,
        },
        {
            text: '일이삼사오육칠팔구십',
            url: Images.price_check_off,
            isChecked: true,
        },


    ]
    const checkList = prices.map((price, index) => <PriceItem key={index} {...price} />)
    return (
        <Container>
            <Text>
                {checkList}
            </Text>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    justify-content:flex-start;
    margin-top: 50px;
`
const Text = styled.div`

`;
export default PriceCheck;