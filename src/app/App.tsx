import React from "react";

import styled, { createGlobalStyle } from "styled-components";

import Layout from "../components/Layout";
import Main from "../pages/Main";

const GlobalStyle = createGlobalStyle`
  * {
    border-width: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const Wrapper = styled.div`
  top: 0px;
  width: 100%;
  min-width: 1210px;
  max-width: 2000px;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Layout>
          <Main />
        </Layout>
      </Wrapper>
    </>
  );
}

export default App;
