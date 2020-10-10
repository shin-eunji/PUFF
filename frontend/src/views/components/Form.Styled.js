import styled from 'styled-components'
import {Color, pxToRem} from "../../lib/Styled";

export const FormStyled = styled.div`
    width: 100%;
    background: ${Color.DARK};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height: calc(100vh - ${pxToRem(146)});
`;
export const FormContainer = styled.div`
    width: ${pxToRem(320)};
`;
export default FormStyled;