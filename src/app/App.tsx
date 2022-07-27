import React, { useState } from "react";

import styled, { createGlobalStyle } from "styled-components";

import Layout from "../components/Layout";
import Main from "../pages/Main";
import DeliveryAreaSearch from "../pages/DeliveryAreaSearch";

interface PageInfo {
  [key: string]: React.ReactElement;
}

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

  .empty-page {
    height: 100vh;
  }
`;

const pageInfo: PageInfo = {
  main: <Main />,
  deliveryAreaSearch: <DeliveryAreaSearch />,
};

function App() {
  const [currentPage, setCurrentPage] = useState<string>("main");

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Layout
          onChangePage={(page) => {
            setCurrentPage(page);
          }}
        >
          {pageInfo[currentPage] ? (
            pageInfo[currentPage]
          ) : (
            <div className="empty-page">빈페이지</div>
          )}
        </Layout>
      </Wrapper>
    </>
  );
}

export default App;
