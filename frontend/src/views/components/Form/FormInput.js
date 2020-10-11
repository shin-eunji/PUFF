import React from 'react';
import styled from 'styled-components';
import {Input} from "./Form.Styled";

function FormInput(props) {

    const {
        type,
        name,
        placeholder,
        register,
        errorType,

    } = props;

    return (
        <Container type={type}
                   name={name}
                   placeholder={placeholder}
                   ref={register}
                   errorType={errorType}
        >
        </Container>
    )
}

const Container = styled(Input)`
`
export default FormInput;