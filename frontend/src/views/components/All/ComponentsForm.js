import React from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form'
import {Input} from "../Form/Form.Styled";


function ComponentsForm (props) {

    const {} = props;

    const {register, watch, setValue ,match, errors, handleSubmit} = useForm();

    return (
        <Container>
            <Form>
                <Input name="password"
                       placeholder={"Password"}
                />
                <Input name="email"
                       placeholder={"Email"}
                       over
                />
                <Input name="example"
                       placeholder={"이메일을 입력하세요"}
                       value={"abcdef"}
                       selected
                />
                <Input name="example"
                       placeholder={"이메일을 입력하세요"}
                       value={"abcdef"}
                       err
                />
            </Form>
        </Container>
    )
}

const Container = styled.div`
`
const Form = styled.form`
    
`;
export default ComponentsForm;