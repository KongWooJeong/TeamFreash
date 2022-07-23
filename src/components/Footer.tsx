import React from "react";

import styled from "styled-components";

const FooterWrapper = styled.div`
  display: table;
  width: 100%;
  min-width: 1210px;
  text-align: center;
  background: #191919;
  padding: 50px 0;
  margin: 0;
`;

const Footer: React.FC = () => {
  return <FooterWrapper>footer</FooterWrapper>;
};

export default Footer;
