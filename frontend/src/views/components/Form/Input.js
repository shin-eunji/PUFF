import React from 'react';
import styled from 'styled-components';

function Input (props) {

    const {
        name,
        ref,
        defaultValue,
        placeholder
    } = props;

    return (
        <Container>
            <input name={name} ref={ref} placeholder={placeholder}/>
        </Container>
    )
}

const Container = styled.div`
margin: 10px 0;
`
export default Input;