import React, {useState} from 'react';
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

function ResetPassword(props) {

    const {} = props;

    const {register, errors, handleSubmit} = useForm();


    const [values, setValue] = useState({})
    const onSubmit = data => console.log("Login Button Click!!!", data);

    return (
        <Container handleSubmit={onSubmit}>
            <ContentContainer>
                <FormStyled>
                    <LoginTitle title={"새로운 비밀번호를 입력하세요"}
                                description={""}
                    />
                    <FormContainer>
                        <Form>
                            <FormInput type="password"
                                       name="newpassword"
                                       ref={register}
                                       placeholder='새 비밀번호 입력'
                                       register={register({required: true})}
                                       errorType={errors?.newpassword?.type}
                                       onChange={(e) => {
                                           setValue({
                                               ...values,
                                               newpassword: e.target.value
                                           })
                                       }}
                            />
                            {errors.newpassword &&
                                <MessageLink message={"error"}>문자, 숫자를 조합하여 6자 이상 입력해주세요.</MessageLink>
                            }
                            <Text>
                                <Message>문자, 숫자를 조합하여 6자 이상 입력해주세요.</Message>
                            </Text>
                        </Form>
                        <Form>
                            <FormInput type="password"
                                       name="newpassword"
                                       ref={register}
                                       placeholder='새 비밀번호 확인'
                                       register={register({required: true})}
                                       errorType={errors?.newpassword?.type}
                                       onChange={(e) => {
                                           setValue({
                                               ...values,
                                               newpassword: e.target.value
                                           })
                                       }}
                            />
                            {errors.newpassword &&
                                <MessageLink message={"error"}>비밀번호가 일치하지 않습니다.</MessageLink>
                            }
                        </Form>
                        <Button size={"full"}
                                sort={"caster"}
                                type="submit"
                                onClick={onSubmit}
                        >비밀번호 변경</Button>
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
export default ResetPassword;