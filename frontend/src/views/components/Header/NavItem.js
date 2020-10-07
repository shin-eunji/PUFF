import React from 'react';
import styled from 'styled-components';
import cn from 'classnames'
import {Images} from "../../../images";
import {pxToRem} from "../../../lib/Styled";
import {navigate} from "../../../lib/History";
import {useSelector} from "react-redux";
import appActions from "../../../redux/actionCreators";
import Dropdown from "./Dropdown";

function NavItem (props) {

    const {
        name,
        to,
        isActive,
        subRoutes
    } = props;

    const dropdown = state => state.app



    return (
        <Container className={cn('NavItem', {isActive})}>
            <Item onClick={() => navigate(to)}>{name}
                {
                    subRoutes &&
                    <img src={Images.dropdown} alt="dropdown"
                         onClick={() => appActions.updateState({
                            dropdown: false
                         })}
                    />
                }
                {
                    dropdown &&
                    <Dropdown dropdown/>
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