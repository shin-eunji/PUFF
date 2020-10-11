import React from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form'

import Info from "../../components/Footer/Info";
import FormInput from "../../components/Form/FormInput";

import {Button} from "../../components/Button/Button.Styled";
import {ContentContainer} from "../../components/Components.Styled";
import FormStyled, {FormContainer} from "../../components/Form.Styled";
import LoginTitle from "../../components/LoginTitle";
import {Message, MessageLink} from "../../components/Text/Message.Styled";
import {navigate} from "../../../lib/History";
import {pxToRem} from "../../../lib/Styled";
import {authActions} from "../../../redux/actionCreators";

function Login(props) {

    const {} = props;

    const {register, errors, handleSubmit} = useForm();


    const onSubmit = data => {
        authActions.signIn(data);
    };

    return (
        <Container>
            <ContentContainer>
                <FormStyled>
                    <LoginTitle title={"환영합니다 :D"}
                                description={"다시 만나서 반가워요!"}
                    />
                    <FormContainer>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <FormInput type="text"
                                       name="email"
                                       register={register({required: true})}
                                       placeholder='이메일을 입력하세요'
                                       errorType={errors?.email?.type}

                            />
                            {errors.email && <span>필수 입력 사항입니다.</span>}
                            <FormInput type="password"
                                       name="password"
                                       placeholder='비밀번호를 입력하세요'
                                       register={register({required: true})}
                                       errorType={errors?.password?.type}
                            />
                            {errors.password && <span>필수 입력 사항입니다.</span>}
                            <Text>
                                <MessageLink message={"topaz"} onClick={() => navigate('/login/password')}>비밀번호를
                                    잊으셨나요?</MessageLink>
                            </Text>
                            <Button size={"full"}
                                    sort={"caster"}
                            >로그인</Button>
                        </Form>
                        <Text>
                            <Message>계정이 필요하세요?</Message>
                            <MessageLink message={"topaz"} onClick={() => navigate('/join')}>가입하기</MessageLink>
                        </Text>
                    </FormContainer>
                </FormStyled>
            </ContentContainer>
            <Info/>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
`
const Form = styled.form`
    margin-bottom: ${pxToRem(20)};
`;
const Text = styled.div`
    position:relative;
    bottom: ${pxToRem(-10)};
    display:flex;
    align-items:center;
    justify-content: flex-start;
`;
export default Login;