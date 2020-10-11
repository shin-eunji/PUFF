import React from 'react';
import styled from 'styled-components';
import {useForm} from "react-hook-form";

import LoginTitle from "../../components/LoginTitle";
import Info from "../../components/Footer/Info";
import FormInput from "../../components/Form/FormInput";

import {ContentContainer} from "../../components/Components.Styled";
import {Color, pxToRem} from "../../../lib/Styled";
import {FormStyled, FormContainer} from "../../components/Form.Styled";
import {Button} from "../../components/Button/Button.Styled";
import {Message, MessageLink} from "../../components/Text/Message.Styled";
import {navigate} from "../../../lib/History";
import {authActions} from "../../../redux/actionCreators";

function Password() {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = data => {
        authActions.signUp(data);
    };

    return (
        <Container>
            <ContentContainer>
                <FormStyled>
                    <LoginTitle title={""}
                                description={"계정 만들기"}
                    />
                    <FormContainer>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <FormInput type="text"
                                       name="email"
                                       placeholder='이메일을 입력하세요'
                                       register={register({required: true})}
                                       errorType={errors?.email?.type}
                            />
                            {errors.email &&
                            <Text>
                                <Message message={"error"} onClick={() => navigate('/login/password')}>이메일 양식이 올바르지
                                    않습니다.</Message>
                            </Text>
                            }

                            <FormInput type="text"
                                       name="nickname"
                                       placeholder='일이삼사오일이삼사오일이삼사오'
                                       register={register}
                                       errorType={errors?.email?.type}

                            />
                            {errors.nickname &&
                            <Text>
                                <Message message={"error"}>이메일 양식이 올바르지 않습니다.</Message>
                            </Text>
                            }
                            <Text>
                                <Message message>한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)</Message>
                            </Text>
                            <FormInput type="password"
                                       name="password"
                                       placeholder='비밀번호를 입력하세요'
                                       register={register({required: true})}
                                       errorType={errors?.password?.type}

                            />
                            {errors.password &&
                            <Message message={"topaz"}>사용가능한
                                비밀번호입니다.</Message>
                            }
                            <Text>
                                <Message>8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</Message>
                            </Text>
                            <FormInput type="password"
                                       name="repassword"
                                       placeholder='비밀번호를 재입력해주세요'
                                       register={register}
                                       errorType={errors?.repassword?.type}
                            />
                            {errors.repassword &&
                            <Text>
                                <Message message={"error"}>비밀번호가 일치하지
                                    않습니다.</Message>
                            </Text>
                            }
                            <Button size={"full"}
                                    sort={"caster"}
                                    type="submit"
                            >가입하기</Button>

                            <MessageLink message={"topaz"}>이미 계정이 있으신가요?</MessageLink>
                        </Form>

                        <Text>
                            <Message>가입하시면 ABCD의
                                <MessageLink message={"topaz"} onClick={() => navigate('/terms')}>서비스 이용
                                    약관</MessageLink>과
                                <MessageLink message={"topaz"} onClick={() => navigate('/privacy')}>개인정보 보호
                                    정책</MessageLink>
                                에 동의하게 됩니다.</Message>
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
    background: ${Color.DARK};
`
const Form = styled.form`
    margin-bottom: ${pxToRem(20)};
`;
const Text = styled.div`
    position:relative;
    bottom: ${pxToRem(-10)};
    display:flex;
    align-items:center;
`;
export default Password;