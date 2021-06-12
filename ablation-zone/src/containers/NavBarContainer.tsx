import React from 'react'
import { Flex, Box, Text, Image } from 'rebass';
import NavLinkDropdownItems from '../components/NavLinkDropDownItems';
import NavLinkDropDown from "../components/NavLinkDropdown";
import NavLink from "../components/NavLink";
import StyledButton from "../components/Button";

function NavBarContainer() {
    return (
        <Flex
            px={2}
            color='white'
            bg='#0D255E'
            minHeight={'5vh'}
            alignItems='center'
      >
        <Image
          src='glacier-finance-brand.png'
          variant='avatar'
          positon='relative'
          sx={{
            width: 48,
            height: 48,
            borderRadius: 9999,
          }}
        />

        <Text p={2} fontWeight='bold'>Glacier Finance</Text>
        <Box mx='auto' />
        <NavLink>
          Docs
        </NavLink>
        <NavLinkDropDown>
          <Text
            alignItems='center'
            right='0'
          >Socials</Text>
          <NavLinkDropdownItems>

          </NavLinkDropdownItems>
        </NavLinkDropDown>
        <StyledButton>
          Coming Soon
        </StyledButton>
      </Flex>
  );
}

export default NavBarContainer;
