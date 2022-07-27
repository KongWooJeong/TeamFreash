import React from "react";

import Header from "./Header";
import Footer from "./Footer";

interface Props {
  onChangePage: (page: string) => void;
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ onChangePage, children }) => {
  return (
    <>
      <Header onSelectPage={onChangePage} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
