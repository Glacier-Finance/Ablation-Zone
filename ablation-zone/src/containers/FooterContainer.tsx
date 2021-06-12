import React from 'react'
import { Box, Flex } from 'rebass';
import FooterBrand from '../components/FooterBrand';
import FooterSocials from '../components/FooterSocials';
function FooterContainer() {
    return (
        <Box
            p={5}
            fontSize={4}
            width={'100'}
            minHeight={'15vh'}
            bg='#5E81B4'
            >
            <Flex
                flexDirection='column'
            >
                <FooterBrand />
                <FooterSocials />
            </Flex>
        </Box>
  );
}

export default FooterContainer;
