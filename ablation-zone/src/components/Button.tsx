import React from 'react'
import styled from "styled-components";

const Button = styled.button`
  padding: 5px 12px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border: 0px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
`;
function StyledButton(props: any) {
    return (
        <Button>
            { props.children }
        </Button>
  );
}

export default StyledButton;
