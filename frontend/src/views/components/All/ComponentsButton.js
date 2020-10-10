import React from 'react';
import styled from 'styled-components';
import {Button} from "../Button/Button.Styled";

function ComponentsButton (props) {

    const {} = props;

    return (
        <Container>
            <ButtonContainer>
                <Button size={"small"} sort={"caster"} normal>로그인</Button>
                <Button size={"small"} sort={"caster"} normal={"presses"}>로그인</Button>
                <Button size={"small"} sort={"caster"} normal={"disabled"}>로그인</Button>
            </ButtonContainer>

            <ButtonContainer>
                <Button size={"small"} sort={"caster"} line>인증 메일 재발송</Button>
                <Button size={"small"} sort={"caster"} line={"presses"}>인증 메일 재발송</Button>
                <Button size={"small"} sort={"caster"} line={"disabled"}>인증 메일 재발송</Button>
            </ButtonContainer>
        </Container>
    )
}

const Container = styled.div`
`
const ButtonContainer = styled.div`
    display:flex;
    align-items:center;
    padding: 20px 0;
`;
export default ComponentsButton;