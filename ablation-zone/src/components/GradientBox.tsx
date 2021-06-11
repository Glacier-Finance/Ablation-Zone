import styled from "styled-components";

const Gradient = styled.div`
  background: linear-gradient(
    0deg,
    hsl(222, 80%, 20%),
    hsl(222, 32.6%, 36.1%)
  );
  height: 100%;
  width: 100%;
`;


function GradientBox(props: any) {
    return (
        <Gradient>
            { props.children }
        </Gradient>
  );
}

export default GradientBox;
