import React from "react";

import styled from "styled-components";

import Image from "../components/Image";
import Introduce from "../components/Introduce";
import Business from "../components/Buisiness";
import Service from "../components/Service";

const Main: React.FC = () => {
  return (
    <>
      <Image />
      <Introduce />
      <Business />
      <Service />
    </>
  );
};

export default Main;
