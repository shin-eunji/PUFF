import React from 'react';
import styled from 'styled-components';
import cn from 'classnames'

function NavItem (props) {

    const {
        name,
        to,
        isActive,
        subRoutes
    } = props;

    return (
        <Container className={cn('NavItem', {isActive})}>
            <Item>{name}</Item>
        </Container>
    )
}

const Container = styled.div`
`
const Item = styled.div`
    color: #fff;
    opacity: .6;
    font-size: 14px;
    .isActive & {
        opacity: 1;
    } 
`;

export default NavItem;