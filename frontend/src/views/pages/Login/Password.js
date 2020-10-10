import React, {useState} from 'react';
import styled from 'styled-components';
import {useForm} from "react-hook-form";

import LoginTitle from "../../components/LoginTitle";
import Info from "../../components/Footer/Info";
import FormInput from "../../components/Form/FormInput";

import {ContentContainer} from "../../components/Components.Styled";
import {Color, pxToRem} from "../../../lib/Styled";
import {FormStyled, FormContainer} from "../../components/Form.Styled";
import {Button} from "../../components/Button/Button.Styled";

function Password(props) {

    const {register, errors, handleSubmit} = useForm();


    const [values, setValue] = useState({})
    const onSubmit = data => console.log("Login Button Click!!!", data);

    return (
        <Container handleSubmit={onSubmit}>
            <ContentContainer>
                <FormStyled>
                    <LoginTitle title={"비밀번호를 잊으셨나요?"}
                                    description={"가입하신 이메일로 비밀번호를 보내드립니다."}
                    />
                    <FormContainer>
                        <Form>
                            <FormInput type="text"
                                       name="email"
                                       ref={register}
                                       placeholder='이메일을 입력하세요'
                                       register={register({required: true})}
                                       errorType={errors?.email?.type}
                                       onChange={(e) => {
                                           setValue({
                                               ...values,
                                               email: e.target.value
                                           })
                                       }}
                            />
                            {errors.email && <span>필수 입력 사항입니다.</span>}
                        </Form>
                        <Button size={"full"}
                                sort={"caster"}
                                type="submit"
                                onClick={onSubmit}
                        >이메일 발송</Button>
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
export default Password;