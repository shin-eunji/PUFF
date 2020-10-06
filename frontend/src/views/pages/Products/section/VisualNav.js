import React from 'react';
import styled from 'styled-components';
import {Color, pxToRem} from "../../../../lib/Styled";

function VisualNav (props) {

    const {} = props;

    return (
        <Container>
            VisualNav
        </Container>
    )
}

const Container = styled.div`
  background: ${Color.LIGHT_DARK};
  height: ${pxToRem(80)};
  display:flex;
  flex-direction:column;
`
export default VisualNav;