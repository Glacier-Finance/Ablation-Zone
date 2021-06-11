import NavBarContainer from "./containers/NavBarContainer"
import MainContainer from "./containers/MainContainer"
import FooterContainer from "./containers/FooterContainer"
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <NavBarContainer></NavBarContainer>
        <MainContainer></MainContainer>
        <FooterContainer></FooterContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
