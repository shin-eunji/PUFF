import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../lib/Styled";
import {Button} from "../Button/Button.Styled";

function Member (props) {

    const {} = props;

    return (
        <Container>
            <Button size={'small'} sort={'lime'} >로그인</Button>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-end;
    cursor: pointer;
    width: ${pxToRem(185)};
`
export default Member;