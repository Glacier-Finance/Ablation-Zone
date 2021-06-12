import React from 'react'
import { Image } from 'rebass';
import FullScreenBox from "../components/FullScreenBox";
import CenteredBox from "../components/CenteredBox";
import GradientBox from "../components/GradientBox";
import TextBox from "../components/TextBox";

function MainContainer() {
  return (
    <>
      <FullScreenBox>
        <CenteredBox>
          <Image
            src='glacier-finance-brand.png'
            variant='avatar'
            positon='relative'
            sx={{
              width: '60%',
              height: '15%',
            }}
          />
          <TextBox size='50px'>Collect enough $WATER before it all melts</TextBox>
          <TextBox size='10px'>Participate in the fastest deprecating yield farm on Polygon</TextBox>
        </CenteredBox>
        <GradientBox />
      </FullScreenBox>
    </>
  );
}


export default MainContainer;
