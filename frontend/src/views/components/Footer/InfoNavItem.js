import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../lib/Styled";

function InfoNavItem (props) {

    const {
        name,
        route
    } = props;

    return (
        <Container>
            <Text to={route}>{name}</Text>
        </Container>
    )
}

const Container = styled.div`
  position:relative;
  &::after {
      content: '';
      position:absolute;
      top: 0;
      right: 0;
      width: ${pxToRem(1)};
      height: 100%;
      background: #222;
  }
  &:last-child::after {
      content: '';
      background: none;
  }
`
const Text = styled.div`
    color: #ccc;
    font-size: ${pxToRem(14)};
    font-weight: 300;
    padding: 0 ${pxToRem(10)};
    cursor: pointer;        
`;
export default InfoNavItem;