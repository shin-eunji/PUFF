import React from 'react';
import styled from 'styled-components';
import {ContentContainer} from "../../../components/Components.Styled";
import {Color, pxToRem} from "../../../../lib/Styled";

function PaginationItem (props) {

    const {
        icon,
        title,
    } = props;

    return (
        <Container >
            <SContentContainer>
                <PageItem>
                    <Icon>{icon}</Icon>
                    <Text>{title}</Text>
                </PageItem>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
`
const SContentContainer = styled(ContentContainer)`
    display:flex;
    align-items:center;
    justify-content:center;
`;
const PageItem = styled.div`
    display:flex;
    align-items:center;
`;
const Icon = styled.div`
    width: ${pxToRem(22)};
    height: ${pxToRem(22)};
`;
const Text = styled.div`
    margin-left: 10px;
    font-size: ${pxToRem(15)};
    color: #fff;
`;
export default PaginationItem;