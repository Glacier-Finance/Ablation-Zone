import React from 'react'
import styled from "styled-components";

const Link = styled.div`
  display: inline-block;
  padding: calc((75px - 1em) / 2);
  position: relative;
  &:hover {
    color: pink;
  }
`;

function NavLink(props: any) {
    return (
        <Link>
            { props.children }
        </Link>
  );
}

export default NavLink;
