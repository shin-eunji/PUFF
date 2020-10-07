import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../lib/Styled";
import {Images} from "../../../images";

function Languages (props) {

    const {} = props;

    return (
        <Container>
            <Text>한국어</Text>
            <img src={Images.dropdown} alt="dropdown"/>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    top: ${pxToRem(43)};
    right: 0;
    display:flex;
    align-items:center;
    justify-content: space-between;
    height: 100%;
    color: #fff;
    width: ${pxToRem(93)};
    height: ${pxToRem(32)};
    background: #111;
    padding: 5px 14px;
    cursor: pointer;
`
const Text = styled.div`
    font-size: 12px;
    font-weight: 500;   
`;
export default Languages;