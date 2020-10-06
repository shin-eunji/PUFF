import React from 'react';
import styled from 'styled-components';
import Visual from "./section/Visual";

function Cam(props) {

    const {} = props;

    return (
        <Container>

            <Visual sort={"cam"}
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
export default Cam;