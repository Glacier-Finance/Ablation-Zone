import React from 'react'
import styled from "styled-components";

const Button = styled.button`
  padding: 5px 12px;
  background-color: #5E81B4;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border: 0px;
  border-radius: 20px;
  appearance: none;
  cursor: default;
  &:hover {
    color: pink;
   }
`;
function StyledButton(props: any) {
    return (
        <Button>
            { props.children }
        </Button>
  );
}

export default StyledButton;
