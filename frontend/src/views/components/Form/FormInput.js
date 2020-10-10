import React from 'react';
import styled from 'styled-components';
import {Input} from "./Form.Styled";

function FormInput(props) {

    const {
        type,
        name,
        ref,
        placeholder,
        register,
        errorType,

    } = props;

    return (
        <Container type={type}
                   name={name}
                   ref={ref}
                   placeholder={placeholder}
                   register={register}
                   errorType={errorType}
        >
        </Container>
    )
}

const Container = styled(Input)`
`
export default FormInput;