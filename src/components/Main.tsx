import React from "react";

import styled from "styled-components";

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-width: 1210px;
  overflow: hidden;
`;

const IntroduceWrapper = styled.div`
  position: relative;
  display: table;
  width: 100%;
  padding: 200px 0;
  background: rgba(0, 0, 0, 0.03);
  overflow: hidden;
  font-family: "Pretendard";
  text-align: center;
  font-weight: 600;
  font-size: 30px;
  line-height: 35px;
  color: #000;
`;

const BusinessWrapper = styled.div`
  position: relative;
  display: table;
  width: 100%;
  height: 1050px;
  padding: 0;
  background: #000;
  overflow: hidden;
`;

const ServiceWrapper = styled.div`
  position: relative;
  display: table;
  width: 100%;
  padding: 150px 0;
  overflow: hidden;
`;

const PointWrapper = styled.div`
  position: relative;
  display: table;
  width: 100%;
  padding: 150px 0;
  padding-top: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0% 50%,
    rgba(0, 0, 0, 0.05) 50% 100%
  );
`;

const LinkWrapper = styled.div`
  position: relative;
  display: table;
  width: 100%;
  padding: 150px 0;
`;

const Main: React.FC = () => {
  return (
    <>
      <ImageWrapper />
      <IntroduceWrapper />
      <BusinessWrapper />
      <ServiceWrapper />
      <PointWrapper />
      <LinkWrapper />
    </>
  );
};

export default Main;
