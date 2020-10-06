import styled from 'styled-components'
import {Color, pxToRem} from "../../../lib/Styled";


export const ButtonGroup = styled.div`
    position:relative;
    z-index: 100;
    display:flex;
    justify-content:center;
    > * {
        margin: 0 ${pxToRem(5)};
        &:first-child {
            margin-left: 0;
        }
        &:last-child {
            margin-right: 0;
        }
    }
    ${props => props.reverse && `
        flex-flow: row-reverse;
    `}
    ${props => props.left && `
        justify-content:flex-start;
    `}
    ${props => props.right && `
        justify-content: flex-end;
    `}
`;

export const Button = styled.div`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    height: ${pxToRem(50)};
    padding: 0 ${pxToRem(20)};
    line-height: 2.05;
    font-size: ${pxToRem(18)};
    color: #000;
    background-color: #fff;
    background-image: none;
    white-space: nowrap;
    text-align:center;
    cursor: pointer;
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    user-select: none;
    font-weight:bold;
    border: 1px solid transparent; 
    border-radius: ${pxToRem(6)};
    &:focus {
        outline: 0;
    }
    ${props => props.sort === 'caster' && `
        background: ${Color.TOPAZ};
        color: ${props.disabled ? '#151ad40' : '#151a1d'};
    `}
    ${props => props.sort === 'play' && `
        background: ${Color.YELLOW};
        color: ${props.disabled ? '#151ad40' : '#151a1d'};
    `}
    ${props => props.sort === 'cam' && `
        background: ${Color.PURPLE};
        color: ${props.disabled ? '#151ad40' : '#151a1d'};
    `}
    ${props => props.sort === 'lime' && `
        background: ${Color.LIME};
        color: ${props.disabled ? '#151ad40' : '#151a1d'};
    `}
    
    ${props => props.full && `
        width: 100%;
    `}
    ${props => props.size === 'small' && `
        height: ${pxToRem(40)};
        font-size: ${pxToRem(16)};
        line-height: 1.18;  
    `}
    ${props => props.size === 'large' && `
        height: ${pxToRem(60)}      
    `}
    ${props => props.disabled && `
        cursor: not-allowed;      
    `}
`;