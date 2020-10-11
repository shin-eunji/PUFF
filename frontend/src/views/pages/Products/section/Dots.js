import React from 'react';
import styled from 'styled-components';
import {Color, pxToRem} from "../../../../lib/Styled";

function Dots(props) {

    const {
        sort
    } = props;

    const dots = [
        'caster',
        'play',
        'cam'
    ]

    return (
        <Container>
            <DotContainer>
            {
                dots.map((item, index) => (
                    <Dot key={index}
                         className={item}
                         isActive={sort === item}/>
                ))
            }
            </DotContainer>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom: ${pxToRem(30)};
`
const DotContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background: #000;
    border-radius: 12px;
    height: ${pxToRem(24)};
    width: ${pxToRem(55)};
`;
const Dot = styled.div`
    opacity: .4;
    width: ${pxToRem(8)};
    height: ${pxToRem(8)};
    margin: 0 ${pxToRem(4)};
    background: #fff;
    border-radius: ${pxToRem(30)};    
    ${props => props.isActive && `
    opacity: 1;      
    `}
    &.caster {
      background: ${Color.TOPAZ};
    }
    &.play {
      background: ${Color.YELLOW};
    }
    &.cam {
      background: ${Color.PURPLE};
    }
    
`;
export default Dots;