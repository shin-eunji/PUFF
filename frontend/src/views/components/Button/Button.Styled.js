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

export const Button = styled.button`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    width: ${pxToRem(320)};
    height: ${pxToRem(50)};
    color: ${Color.DARK};
    font-size: ${pxToRem(18)};
    font-weight:bold;
    line-height: 2;
    background-color: transparent;
    background-image: none;
    white-space: nowrap;
    text-align:center;
    cursor: pointer;
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    user-select: none;
    border: 1px solid transparent;
    margin-top: ${pxToRem(34)}; 
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
    ${props => props.sort === 'dark' && `
        background: ${Color.DARK};
        border-radius: 6px;
        color: ${props.disabled ? '#fff' : '#fff'};
    `}
    ${props => props.sort === 'line' && `
        background: #fff;
        border: 1px solid #222;
        border-radius: 6px;    
        color: ${props.disabled ? '#222222' : '#222222'};
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
    ${props => props.normal && `
        background: ${Color.TOPAZ};
        font-size: ${pxToRem(18)};
        color: ${props.disabled ? `${Color.DARK}` : `${Color.DARK}`};
    `}
    
    ${props => props.normal === 'presses' && `
        opacity: .4;
    `}
    ${props => props.normal === 'disabled' && `
        cursor: not-allowed;
        &:disabled {
            color: ${Color.DARKOPACITY} 
        }
    `}
    ${props => props.line && `
        border: 1px solid ${Color.TOPAZ};
        border-radius: ${pxToRem(6)};
        background: none; 
        font-size: ${pxToRem(16)};
        font-weight: 500;
        color: ${props.disabled ? `${Color.TOPAZ}` : `${Color.TOPAZ}`};
    `}
    ${props => props.line === 'presses' && `
        opacity: .4;
    `}
    ${props => props.line === 'disabled' && `
        cursor: not-allowed;
        opacity: .4;
    `}
`;