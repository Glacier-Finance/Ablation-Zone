import React from 'react'
import { Box, Flex, Image, Text } from 'rebass';

function FooterContainer() {
    return (
        <Box
            p={5}
            fontSize={4}
            width={'100'}
            minHeight={'15vh'}
            bg='#5E81B4'
            >
            <Flex>
            <Box
                p={3}
                width={1/2}
                color='white'
                    bg='primary'>
                    <Box
                p={3}
                width={1/2}
                color='white'
                        bg='primary'>
                        
                </Box>
                <Image
                    src='glacier-finance-brand.png'
                    variant='avatar'
                    positon='relative'
                    sx={{
                        width: 48,
                        height: 48,
                    }}
                />
                <Text p={2} fontWeight='bold'>Glacier Finance</Text>
            </Box>
            <Box
                p={3}
                width={1/2}
                color='white'
                bg='secondary'>
                Box
            </Box>
            </Flex>
        </Box>
  );
}

export default FooterContainer;
