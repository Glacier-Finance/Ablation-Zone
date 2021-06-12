import React from 'react';
import styled from "styled-components";

const DropdownContainer = styled.div`
  background-color: #34515e  ;
  box-shadow: 0 1px 3px #607d8b;
  top: 75px;
  max-height: 0;
  overflow: hidden;
  position: absolute;
  min-width: 120px;
  width: 100%;
  z-index: 2;
  text-align: center;
  ul {
    padding: 0;
    list-style: none;
    li {
      padding: 5px;
      &:hover {
        background-color: #607d8b ;
       }
    }
  }

`;

const Text = styled.a`
  color: white;
  font-family: sans-serif;
  font-size: 14px;
  margin-bottom: 16px;
  text-align: center;
  width: 100%;
  text-decoration: none;
  &:hover {
    color: inherit;
    text-decoration: none;
    background-color: #607d8b ;
   }
`;

function NavLinkDropdownItems(props: any) {
  return (
      <DropdownContainer>
           <ul>
              <li><Text href="https://www.google.com">Twitter</Text></li>
              <li><Text href="https://www.google.com">Discord</Text></li>
              <li><Text href="https://www.google.com">Telegram</Text></li>
              <li><Text href="https://www.google.com">Medium</Text></li>
            </ul>
      </DropdownContainer>
  );
}

export default NavLinkDropdownItems;