import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import "./Layout.css"

const Layout = ({children}) => {
  return (
    <div className="container">
      <SideBar />
      <div className="main-content">
        <Header/>
        {children}
      </div>
    </div>
  );
};

export default Layout;
