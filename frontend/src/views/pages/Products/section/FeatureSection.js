import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {ContentContainer} from "../../../components/Components.Styled";
import {Color, pxToRem} from "../../../../lib/Styled";

function FeatureSection (props) {

    const {
        title,
        thumbnail,
        description,
        reverse,
    } = props;

    return (
        <Container className={cn({reverse})}>
            <SContentContainer>
                <Text>
                    <h5>{thumbnail}</h5>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </Text>
                <Preview></Preview>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
    margin: 150px 0;
`
const SContentContainer = styled(ContentContainer)`
    display:flex;
    .reverse & {
        flex-direction: row-reverse;
        Text {
            margin-left: 60px;
        }
    }
`;
const Text = styled.div`
    flex: 1;
    margin-right: 60px;
    h5 {
        color: ${Color.TOPAZ};
        font-size: ${pxToRem(18)};
        font-weight: 900;
        margin-bottom: 20px;
    }
    h2 {
        font-size: ${pxToRem(42)};
        font-weight: 900;
        line-height: 1.2;
        margin-bottom: 30px;
    }
    p {
        color: #222;
        font-weight: 500;
        line-height: 1.4;
      
    }
    
`;
const Preview = styled.div`
    width: ${pxToRem(760)};
    height: ${pxToRem(500)};
    border-radius: ${pxToRem(6)};
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.2);
    background-color: #272c33;
`;
export default FeatureSection;