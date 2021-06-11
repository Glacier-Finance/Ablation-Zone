import styled from "styled-components";

const Text = styled.h1`
  color: white;
  font-family: sans-serif;
  font-size: ${(props: any) => props.size};
  margin-bottom: 16px;
`;

function TextBox(props: any) {
    return (
        <Text>
            { props.children }
        </Text>
  );
}

export default TextBox;
