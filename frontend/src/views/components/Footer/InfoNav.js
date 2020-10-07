import React from 'react';
import styled from 'styled-components';
import InfoNavItem from "./InfoNavItem";

function InfoNav (props) {

    const {
        name
    } = props;

    const routes = [
        {
            name: '서비스이용약관',
            to: '/terms',
            isActive: false,
        },
        {
            name: '개인정보처리방침',
            to: '/privacy',
            isActive: false,
        },
        {
            name: '도움말',
            to: '/help',
            isActive: false,
        }
    ]

    return (
        <Container>
            {
                routes.map((route, index) => <InfoNavItem key={index} {...route}/>)
            }
        </Container>
    )
}

const Container = styled.div`
      display:flex;
      align-items:center;
      justify-content:center;
`
export default InfoNav;