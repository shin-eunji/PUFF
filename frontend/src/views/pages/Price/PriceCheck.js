import React, {useState} from 'react';
import styled from 'styled-components';
import {Images} from "../../../images";

function PriceCheck (props) {

    const {} = props;

    const price = [
        {
            id: "",
            text: "일이삼사오육칠팔구십",
            isChecked: false
        },
        {
            id: "",
            text: "일이삼사오육칠팔구십",
            isChecked: false
        },
        {
            id: "",
            text: "일이삼사오육칠팔구십",
            isChecked: false
        },
    ]

    return (
        <Container>
            <Text>
                {
                    price.map((text, index) => <p key={index}>{price.}</p>)
                }
            </Text>
            {/*<img src={Images.price_check_off} alt=""/>*/}
            {/*<img src={Images.price_check_on} alt=""/>*/}
            {
                
            }
        </Container>
    )
}

const Container = styled.div`
`
const Text = styled.div`
    
`;
export default PriceCheck;