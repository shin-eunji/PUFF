import React from 'react';
import styled from 'styled-components';
import {Color, pxToRem} from "../../../../lib/Styled";
import PaginationItem from "./PaginationItem";
import {ContentContainer} from "../../../components/Components.Styled";

function Pagination(props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <PaginationItem title={"퍼프 캐스터"}
                                sort={'caster'}
                />
                <PaginationItem title={"퍼프 채팅창"}
                                sort={'play'}
                />

                <PaginationItem title={"퍼프 캠"}
                                sort={'cam'}
                                disable
                />
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
    background: ${Color.LIGHT_DARK};
    height: ${pxToRem(80)};
    display:flex;
    align-items:center;
`
const SContentContainer = styled(ContentContainer)`
    display:flex;
    align-items:center;
    justify-content: space-around;   
    width: 100%;
`;
export default Pagination;