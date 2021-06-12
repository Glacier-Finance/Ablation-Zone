import styled from "styled-components";

const Centered = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


function CenteredBox(props: any) {
    return (
        <Centered>
            { props.children }
        </Centered>
  );
}

export default CenteredBox;
