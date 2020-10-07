import React from 'react';
import styled from 'styled-components';
import NavItem from "./NavItem";

function Nav (props) {

    const {
    } = props;


    function getRoutes() {

    }

    const routes = [
        {
            name: '제품',
            to: '/products/caster',
            isActive: true,
            subRoutes: [
                {
                    name: 'puff caster',
                    to: '/products/caster',
                    isActive: false,
                },
                {
                    name: 'puff chat',
                    to: '/products/chat',
                    isActive: false,
                },
                {
                    name: 'puff cam',
                    to: '/products/cam',
                    isActive: false,
                },
            ]
        },
        {
            name: '프리미엄',
            to: '/premium',
            isActive: false,
        },
        {
            name: '더 알아보기',
            to: '/more',
            isActive: false,
        }
    ]

    return (
        <Container>
            {
                routes.map((route, index) => <NavItem key={index} {...route}/>)
            }
        </Container>
    )
}

const Container = styled.nav`
    display:flex;
    align-items:center;
`
export default Nav;