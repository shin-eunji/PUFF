import styled from 'styled-components'
import {Color, pxToRem} from "../../../lib/Styled";
import {Link} from "react-router-dom";

export const Message = styled.p`
    font-size: ${pxToRem(12)};
    color: #444;
    text-align:left;
    ${props => props.message && `
        color: ${props.disabled ? '#444' : '#444'};
    `}
    ${props => props.message === 'error' && `
        color: ${Color.RED} 
    `}
    ${props => props.message === 'topaz' && `
        color: ${Color.TOPAZ} 
    `}
`;

export const MessageLink = styled(Link)`
    font-size: ${pxToRem(12)};
    color: #444;
    font-weight: 400;
    text-align:left;
    cursor: pointer;
    margin-left: ${pxToRem(5)};
    ${props => props.message && `
        color: ${props.disabled ? '#444' : '#444'};
    `}
    ${props => props.message === 'error' && `
        color: ${Color.RED} 
    `}
    ${props => props.message === 'topaz' && `
        color: ${Color.TOPAZ} 
    `}
`;

