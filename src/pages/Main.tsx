import React from "react";

import Image from "../components/Image";
import Introduce from "../components/Introduce";
import Business from "../components/Business";
import Service from "../components/Service";
import Point from "../components/Point";
import Link from "../components/Link";

const Main: React.FC = () => {
  return (
    <>
      <Image />
      <Introduce />
      <Business />
      <Service />
      <Point />
      <Link />
    </>
  );
};

export default Main;
