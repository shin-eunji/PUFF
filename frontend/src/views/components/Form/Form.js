import React from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form'
import {Input} from "./Form.Styled";
import {Button} from "../Button/Button.Styled";
import {Link} from "react-router-dom";
import {navigate} from "../../../lib/History";
import {Color} from "../../../lib/Styled";

function Form (props) {

    const {} = props;

    const {register, watch, setValue ,match, errors, handleSubmit} = useForm();

    return (
        <Container>
            <form onSubmit={handleSubmit(onsubmit)}>
                <Input name="email"
                       ref={register}
                       placeholder={"이메일을 입력하세요"}
                />
                <Input name="password"
                       ref={register}
                       placeholder={"비밀번호를 입력하세요"}
                />
                <Button size={"full"}
                        sort={"caster"}
                >로그인</Button>

                <Text>
                    <UserPassword>
                        <Item to={() => navigate('/userpassword')}>비밀번호를 잊으셨나요?</Item>
                    </UserPassword>
                    <Join>계정이 필요하세요?
                        <Item to={() => navigate('/join')}>가입하기</Item>
                    </Join>
                </Text>
            </form>
        </Container>
    )
}

const Container = styled.div`
`
const Text = styled.div`
    color: ${Color.TOPAZ};
`;
const UserPassword = styled.div`
    
`;
const Join = styled.div`
    
`;
const Item = styled(Link)`
    
`;
export default Form;