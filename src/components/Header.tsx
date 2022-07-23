import React from "react";

import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: fixed;
  display: table;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 1210px;
  padding: 0;
  text-align: center;
  z-index: 100;
  transition: all 0.2s ease;
`;

const Header: React.FC = () => {
  return <HeaderWrapper>header</HeaderWrapper>;
};

export default Header;
