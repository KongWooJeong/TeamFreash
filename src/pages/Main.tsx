import React from "react";

import styled from "styled-components";

import Image from "../components/Image";
import Introduce from "../components/Introduce";
import Business from "../components/Buisiness";
import Service from "../components/Service";
import Point from "../components/Point";
import Link from "../components/LInk";
import Footer from "../components/Footer";

const Main: React.FC = () => {
  return (
    <>
      <Image />
      <Introduce />
      <Business />
      <Service />
      <Point />
      <Link />
      <Footer />
    </>
  );
};

export default Main;
