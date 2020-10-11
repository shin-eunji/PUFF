import React from 'react';
import styled from 'styled-components';
import {Color, pxToRem} from "../../../../lib/Styled";
import cn from 'classnames';
import {navigate} from "../../../../lib/History";

function Nav(props) {

    const {
        sort
    } = props;

    const routes = [
        {
            name:'퍼프캐스트',
            to: '/products/caster',
            sort: 'caster'
        },
        {
            name:'퍼프 채팅창',
            to: '/products/play',
            sort: 'play'
        },
        {
            name:'퍼프 캠',
            to: '/products/cam',
            sort: 'cam'
        },
    ]

    return (
        <Container>
            {
                routes.map((route, index) => <NavItem key={index}
                                                       className={cn(route.sort, {isActive: sort === route.sort})}
                                                       onClick={() => navigate(route.to)}
                >{route.name}</NavItem>)
            }
        </Container>
    )
}

const Container = styled.div`
    height: 80px;
    background: ${Color.LIGHT_DARK};
    display:flex;
    justify-content:center;
    
`
const NavItem = styled.div`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    width: ${pxToRem(280)};
    color: #fff;
    opacity: .4;
    z-index: 1;
    cursor: pointer;
    &.isActive {
      opacity: 1;
      &::after {
      content: '';
      position:absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;  
      background: ${Color.DARK};
      transform: skew(-15deg);
      z-index: -1;
      }
    }
    
    &:before {
      content: '';
      display:block;
      width: ${pxToRem(22)};
      height: ${pxToRem(22)};
      margin-right: ${pxToRem(10)};
    }
    
    &.caster::before {
      background: ${Color.TOPAZ};
    }
    &.play::before {
      background: ${Color.YELLOW};
    }
    &.cam::before {
      background: ${Color.PURPLE};
    }
`;
export default Nav;