import React from 'react';
import styled from 'styled-components';
import {ButtonCom} from "../Button/Button.Styled";

function ComponentsButton (props) {

    const {} = props;

    return (
        <Container>
            <ButtonContainer>
                <Button size={"small"} sort={"caster"} normal>로그인</Button>
                <Button size={"small"} sort={"caster"} presses>로그인</Button>
                <Button size={"small"} sort={"caster"} disabled>로그인</Button>
            </ButtonContainer>

            <ButtonContainer>
                <Button size={"small"} sort={"caster"} lineNormal>인증 메일 재발송</Button>
                <Button size={"small"} sort={"caster"} linePresses>인증 메일 재발송</Button>
                <Button size={"small"} sort={"caster"} lineDisabled>인증 메일 재발송</Button>
            </ButtonContainer>
        </Container>
    )
}

const Container = styled.div`
`
const Button = styled(ButtonCom)`
    
`;
const ButtonContainer = styled.div`
    display:flex;
    align-items:center;
    padding: 20px 0;
`;
export default ComponentsButton;