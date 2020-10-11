import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../lib/Styled";
import {Button} from "../Button/Button.Styled";
import {navigate} from "../../../lib/History";
import Login from "../../pages/Login";

function Member (props) {

    const {} = props;

    return (
        <Container>
            <LoginButton size={'small'}
                    sort={'lime'}
                    onClick={() => navigate('/login')} >로그인</LoginButton>
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
const LoginButton = styled(Button)`
    width: ${pxToRem(90)};
    margin-top: ${pxToRem(0)};
`;
export default Member;