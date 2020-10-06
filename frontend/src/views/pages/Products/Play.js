import React from 'react';
import styled from 'styled-components';
import Visual from "./section/Visual";

function Play(props) {

    const {} = props;

    return (
        <Container>
            <Visual sort={"play"}
                    title={""}
                    description={""}
                    download={""}
                    downlaodIcon={""}
                    caution={""}
                    thumbnail={""}
            />
        </Container>
    )
}

const Container = styled.div`
`
export default Play;