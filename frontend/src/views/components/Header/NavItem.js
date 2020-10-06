import React from 'react';
import styled from 'styled-components';
import cn from 'classnames'
import {Images} from "../../../images";
import {pxToRem} from "../../../lib/Styled";

function NavItem (props) {

    const {
        name,
        to,
        isActive,
        subRoutes
    } = props;

    return (
        <Container className={cn('NavItem', {isActive})}>
            <Item>{name}
                {
                    subRoutes &&
                    <img src={Images.dropdown} alt="dropdown"/>
                }
            </Item>
        </Container>
    )
}

const Container = styled.div`
    padding: 0 ${pxToRem(25)};
`
const Item = styled.div`
    color: #fff;
    opacity: .6;
    font-size: ${pxToRem(14)};
    line-height: 1.5;
    display:flex;
    align-items:center;
    cursor: pointer;
    .isActive & {
      opacity: 1;
    }
    img {
        margin-left: ${pxToRem(10)};
    }
`;

export default NavItem;