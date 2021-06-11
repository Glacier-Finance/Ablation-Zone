import React, { useState } from 'react';
import styled from "styled-components";

const DropdownContainer = styled.article`
  background-color: #fff;
  box-shadow: 0 1px 3px #aaa;
  top: 75px;
  max-height: 0;
  left: 0;
  text-align: center;
  overflow: hidden;
  position: absolute;
  transition: max-height 0.3s ease-out;
  min-width: 120px;
  width: 100%;
  z-index: 2;

  ul {
    list-style: none;

    li {
      padding: 5px;
    }
  }
`;

function NavLinkDropdownItems(props: any) {
  return (
      <DropdownContainer>
           <ul>
              <li>Twitter</li>
              <li>Medium</li>
              <li>Telegram</li>
              <li>Discord</li>
            </ul>
      </DropdownContainer>
  );
}

export default NavLinkDropdownItems;