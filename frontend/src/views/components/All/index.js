import React from 'react';
import styled from 'styled-components';

import ComponentsButton from "./ComponentsButton";
import ComponentsForm from "./ComponentsForm";
import {Color} from "../../../lib/Styled";
import {ContentContainer} from "../Components.Styled";

function AllComponents (props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <ComponentsButton/>
                <ComponentsForm/>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    background: ${Color.DARK};
`
const SContentContainer = styled(ContentContainer)`
    padding: 100px 0;
    
`;
export default AllComponents;