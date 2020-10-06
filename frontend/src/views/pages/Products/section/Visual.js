import React from 'react';
import styled from 'styled-components';
import {ContentContainer} from "../../../components/Components.Styled";
import {Images} from "../../../../images";
import {Button} from "../../../components/Button/Button.Styled";
import {Color, pxToRem} from "../../../../lib/Styled";
import Pagination from "./Pagination";

function Visual (props) {

    const {
        sort,
        title,
        description,
        download,
        downlaodIcon,
        caution,
        thumbnail
    } = props;

    return (
        <Container>
            <SContentContainer>
                <Text>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="more">메뉴얼 상세보기</div>
                    <Button className={'download'}
                            sort={'caster'}
                            size={'large'}
                    >
                        <img src={downlaodIcon} alt="다운로드"/>
                        {download}
                    </Button>
                    <div className="caution">{caution}</div>
                    <div className="platform">
                        <h4>연동 플랫폼</h4>
                        <div className="icons">
                            <img src={Images.youtube} alt="유튜브 플랫폼"/>
                            <img src={Images.twitch} alt="트위치 플랫폼"/>
                            <img src={Images.facebook} alt="페북 플랫폼"/>
                            <img src={Images.mixer} alt="믹서 플랫폼"/>
                        </div>
                    </div>
                </Text>
                
                <Thumbnail>
                    <img src={thumbnail} alt="caster 썸네일"/>
                </Thumbnail>
            </SContentContainer>

            <Pagination sort={sort}/>
        </Container>
    )
}

const Container = styled.div`
  background: ${Color.DARK};
  min-height: ${pxToRem(880)};
  height: calc(100vh - 80px);
  display:flex;
  flex-direction:column;
  padding-top: 12vh;
`
const SContentContainer = styled(ContentContainer)`
    display:flex;
    flex: 1;
    width: 100%;
`;
const Text = styled.div`
    flex: 1;
    h2 {
      font-size: ${pxToRem(48)};
      font-weight: 800;
      color: #fff;
      line-height: 1.19;
      margin-bottom: ${pxToRem(35)};
      white-space: pre-wrap;
    }
    p {
      font-size: ${pxToRem(18)};
      color: #ccc;
      line-height: 2;
      margin-bottom: ${pxToRem(14)};
      white-space: pre-wrap;
    }
    .more {
        font-size: ${pxToRem(18)};
        color: #fff;
        font-weight: 300;
        margin-bottom: ${pxToRem(60)};
        position:relative;
        display:flex;
        align-items:center;
        &::before {
          content: '';
          width: ${pxToRem(12)};
          height: ${pxToRem(12)};
          border: 3px solid #fff;
          border-radius: 50%;
          margin-right: ${pxToRem(8)};
        }
    }
    .download {
      width: ${pxToRem(240)};
      img {
      margin-right: ${pxToRem(8)};
      }
    }
    .caution {
        font-size: ${pxToRem(14)};
        font-weight: 300;
        color: #777;
        line-height: 2.6;
    }
    .platform {
        margin-top: ${pxToRem(40)};
        h4 {
          font-weight: 300;
          color: #fff;
          margin-bottom: ${pxToRem(30)};
        }
        .icons {
            display:flex;
            align-items:center;
            img {
                margin-right: ${pxToRem(36)};
            }
        }
    }
`;
const Thumbnail = styled.div`
    position:relative;
    top: 0;
    right: 0;
    &::before{
        content: '';
        position:absolute;
        top: ${pxToRem(-100)};
        right: ${pxToRem(-50)};
        width: ${pxToRem(470)};
        height: ${pxToRem(600)};
        background-image: url(${Images.visual_parttern});
        z-index: 1000;
    }
`;
export default Visual;