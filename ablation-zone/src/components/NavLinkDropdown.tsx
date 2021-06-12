import React from 'react';
import styled from "styled-components";

const NavLink = styled.div`
  display: block;
  padding: calc((75px - 1em) / 2);
  position: relative;
  align-items: center;
  &:hover {
   & > div {
     color: pink;
     right: 0;
      max-height: 170px;
    } 
  }
`;

function NavLinkDropdown(props: any) {
  return (
      <NavLink>
          { props.children }
      </NavLink>
  );
}

export default NavLinkDropdown;