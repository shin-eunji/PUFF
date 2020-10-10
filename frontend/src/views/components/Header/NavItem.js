import React, {useState} from 'react';
import styled from 'styled-components';
import cn from 'classnames'
import {Images} from "../../../images";
import {pxToRem} from "../../../lib/Styled";
import {navigate} from "../../../lib/History";
import DropdownContainer from "./DropdownContainer";
import appActions from "../../../redux/actionCreators";
import {useDispatch, useSelector} from "react-redux";

function NavItem (props) {

    const {
        name,
        dropdown,
        to,
        isActive,
        subRoutes,
    } = props;

    const app = useSelector(state => state.app)
    const dispatch = useDispatch()

    return (
        <Container className={cn('NavItem', {isActive})}>
            <Item dropdown onClick={() =>
                console.log(appActions.updateState)
                // appActions.updateState({
                // dropdown: true
                //
                // })
            }>{name}
                {
                    subRoutes &&
                    <img src={Images.dropdown} alt="dropdown"/>

                }
                {
                    subRoutes && app &&
                    <DropdownContainer dropdown={dropdown}/>
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