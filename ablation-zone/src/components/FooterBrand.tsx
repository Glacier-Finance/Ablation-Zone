import styled from "styled-components";
import { Image } from 'rebass';

const Box = styled.div`
    display: inline-block;
    width: 100%;
    top: 50%;
    text-align: center;
`;

const Text = styled.span`
    font-weight: bold;
`;

function FooterBrand() {
    return (
            <Box>
                <Image
                    src='glacier-finance-brand.png'
                    variant='avatar'
                    sx={{
                        height: 70,
                    }}
                />
                <Text>Glacier Finance</Text>
            </Box>
  );
}

export default FooterBrand;