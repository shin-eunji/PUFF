import React from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form'
import Form from "../../components/Form/Form";

function LoginForm (props) {

    const {} = props;

    const {register, watch, setValue ,match, errors, handleSubmit} = useForm();

    return (
        <Container>
            <Form/>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:flex-start;
`
export default LoginForm;