import React from 'react';
import styled from "styled-components";

const NavLink = styled.div`
  display: inline-block;
  padding: calc((75px - 1em) / 2);
  position: relative;

  &:hover {
    color: pink;
   & > article {
      max-height: 140px;
      transition: max-height 0.3s ease-in;
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