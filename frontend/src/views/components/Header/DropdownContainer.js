import React from 'react';
import styled from 'styled-components';
import Dropdown from 'react-dropdown';

function DropdownContainer (props) {

    const {
        dropdown
    } = props;

    return (
        <Container onClick={() => {
            dropdown(false)
        }}>
            Dropdown
        </Container>
    )
}

const Container = styled(Dropdown)`

`
export default DropdownContainer;