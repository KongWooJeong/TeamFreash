import React from "react";

import styled from "styled-components";

import Image from "../components/Image";
import Introduce from "../components/Introduce";
import Business from "../components/Buisiness";

const Main: React.FC = () => {
  return (
    <>
      <Image />
      <Introduce />
      <Business />
    </>
  );
};

export default Main;
