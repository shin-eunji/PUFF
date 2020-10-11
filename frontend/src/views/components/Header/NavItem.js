import React, {useState} from 'react';
import styled from 'styled-components';
import cn from 'classnames'
import {Images} from "../../../images";
import SubMenu from "./SubMenu";
import {Color, pxToRem} from "../../../lib/Styled";
import {navigate} from "../../../lib/History";

function NavItem(props) {

    const {
        name,
        to,
        isActive,
        subRoutes,
        location
    } = props;

    const [menu, setMenu] = useState(false)

    const onClick = () => {
        if(subRoutes) {
            setMenu(true)
        } else {
            navigate(to)
        }
    }

    return (
        <Container className={cn('NavItem', {isActive})}>
            <Name onClick={onClick}>
                {name}
                {
                    subRoutes &&
                    <img src={Images.dropdown} alt="dropdown"/>

                }
            </Name>
            {
                menu &&
                <SubMenu name={name}
                         location={location}
                         routes={subRoutes}
                         onClose={() => setMenu(false)}
                />
            }
        </Container>
    )
}

const Container = styled.div`
    padding: 0 ${pxToRem(25)};
    position:relative;
`
const Name = styled.div`
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