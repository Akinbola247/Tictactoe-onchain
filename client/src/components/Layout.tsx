import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../index.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-between">
      <Header />
      <body>{children}</body>
      <Footer />
    </div>
  );
};

export default Layout;
