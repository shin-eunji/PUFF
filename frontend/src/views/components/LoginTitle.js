import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../lib/Styled";

function LoginTitle (props) {

    const {
        title,
        description
    } = props;

    return (
        <Container>
            <Text>
                <h2>{title}</h2>
                <p>{description}</p>
            </Text>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`
const Text = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color: #fff;
    padding-bottom: ${pxToRem(50)};
    h2 {
        font-size: ${pxToRem(36)};
        font-weight: 900;
        margin-bottom: 10px;
        white-space: normal;
    }
    p {
        font-size: ${pxToRem(20)};
        font-weight: 400;
        white-space: normal;
    }
`;
export default LoginTitle;