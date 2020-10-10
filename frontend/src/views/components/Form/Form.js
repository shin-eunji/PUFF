import React, {useState} from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form'
import {Input} from "./Form.Styled";
import {Button} from "../Button/Button.Styled";
import {navigate} from "../../../lib/History";
import {Color, pxToRem} from "../../../lib/Styled";
import {useSelector} from "react-redux";

function Form(props) {

    const {} = props;

    const {register, watch, errors, handleSubmit} = useForm();


    const [values, setValue] = useState({})
    const onSubmit = data => console.log("Login Button Click!!!", data);

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input id="email"
                       name="email"
                       type="text"
                       ref={register({})}
                       placeholder={"이메일을 입력하세요"}
                       onChange={(e) => {
                           setValue({
                               email: e.target.value
                           })
                       }}
                       required
                />
                {errors.email && ""}
                <span role="alert">필수정보입니다.</span>
                <Input id="password"
                       name="password"
                       type="password"
                       ref={register({})}
                       placeholder={"비밀번호를 입력하세요"}
                       onChange={(e) => {
                           setValue({
                               password: e.target.value
                           })
                       }}
                />
                {errors.password && ""}
                <span role="alert">필수정보입니다.</span>
            </form>

            <LoginButton size={"full"}
                         sort={"caster"}
                         type="submit"
            >로그인</LoginButton>

            <Text>
                <UserPassword>
                    <Item to={() => navigate('/userpassword')}>비밀번호를 잊으셨나요?</Item>
                </UserPassword>
                <Join>
                    <p>계정이 필요하세요?</p>
                    <Item to={() => navigate('/join')}>가입하기</Item>
                </Join>
            </Text>
        </Container>
    )
}

const Container = styled.div`
    span {
        color: ${Color.RED};
        font-size: 11px;
        font-weight: 300;
    }
`
const LoginButton = styled(Button)`
    margin-top: ${pxToRem(54)};
`;
const Text = styled.div`
    position:relative;
    top: 0;
    left: 0;
    font-size: ${pxToRem(13)};
    font-weight: 300;
`;
const UserPassword = styled.div`
    position:relative;
    top: ${pxToRem(-90)};
    left: 0;
`;
const Join = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    p {
      color: #fff;
      opacity: .3;
      margin-right: ${pxToRem(6)};
    }
`;
const Item = styled.div`
    color: ${Color.TOPAZ};
    opacity: 1;
`;
export default Form;