import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import {Images} from "../../../images";
import {Color, pxToRem} from "../../../lib/Styled";
import {navigate} from "../../../lib/History";
import withRouter from "react-router-dom";

function SubMenu(props) {

    const {
        routes,
        name,
        onClose,
        location,
    } = props;

    const subMenuRef = useRef(null)

    useEffect(() => {

            document.addEventListener('click', function(e) {
                if(subMenuRef.current) {
                    const isSubMenu = subMenuRef.current.contains(e.target)
                    if(!isSubMenu) {
                        onClose()
                    }
                }
            })
    }, [])

    if (!routes || _.isEmpty(routes)) {
        return null
    }

    return (
        <Container ref={subMenuRef}>
            <Name onClick={onClose}>{name} <img src={Images.dropdown} alt="dropdown"/></Name>
            {
                routes.map((route, index) => <MenuItem key={index}
                                                       isActive={location.pathname === route.to}
                                                       onClick={() => {
                                                           navigate(route.to)
                                                           if(location.pathname !== route.to) {
                                                               onClose()
                                                           }
                                                       }}

                >{route.name}</MenuItem>)
            }
        </Container>
    )
}

const Container = styled.div`
    width: ${pxToRem(147)};
    height: ${pxToRem(132)};
    background: ${Color.LIGHT_DARK};
    padding: ${pxToRem(13)} ${pxToRem(16)};
    position: absolute;
    top: -13px;
    left: 9px;
    z-index: 10;
`
const Name = styled.div`
    display:flex;
    align-items:center;
    font-size: ${pxToRem(14)};
    line-height: 1.5;
    margin-bottom: 5px;
    color: #fff;
    cursor: pointer;
    img {
      margin-left: ${pxToRem(10)};
    } 
    
`;
const MenuItem = styled.div`
    height: 30px;
    display:flex;
    align-items:center;
    text-transform: uppercase;
    font-size: ${pxToRem(14)};
    color: #fff;
    cursor: pointer;
    
    ${props => props.isActive &&`
        color: #01bdfd;
    `}
`;
export default SubMenu;