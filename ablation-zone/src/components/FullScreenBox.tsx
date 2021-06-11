import styled from "styled-components";

const FullScreen = styled.div`
  height: 100vh;
  width: 100;
`;

function FullScreenBox(props: any) {
    return (
        <FullScreen>
            { props.children }
        </FullScreen>
  );
}

export default FullScreenBox;
