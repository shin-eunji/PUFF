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
position:relative;
top: 0;
right: 0;
width: 300px;
height: 300px;
background: #000;
`
export default DropdownContainer;