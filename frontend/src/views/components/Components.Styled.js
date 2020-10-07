import styled from 'styled-components'
import {Color, pxToRem} from "../../lib/Styled";

export const ContentContainer = styled.div`
    max-width: 1170px;
    padding: 0 15px;
    margin: 0 auto;   
`;

export const IconBox = styled.div`
    width: ${pxToRem(22)};
    height: ${pxToRem(22)};
    
    ${props => props.sort === 'caster' && `
        background: ${Color.TOPAZ};
    `}
    ${props => props.sort === 'play' && `
        background: ${Color.YELLOW};
    `}
    ${props => props.sort === 'cam' && `
        background: ${Color.PURPLE};
    `}
    ${props => props.sort === 'lime' && `
        background: ${Color.LIME};
    `}
`;