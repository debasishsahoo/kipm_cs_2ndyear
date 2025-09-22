import React from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Services from "./components/Services/Services";
import Stats from "./components/Stats/Stats";
import RecentWork from "./components/RecentWork/RecentWork";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Services />
      <Stats />
      <hr />
      <RecentWork />
      <hr />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
