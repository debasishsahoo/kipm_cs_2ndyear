import React, { useState, createContext, useContext } from "react";
import DashBoard from "./Components/DashBoard/DashBoard";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";
import "./App.css";

// Context for navigation
export const NavigationContext = createContext();

// Custom hook for navigation
export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const navigate = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashBoard />;
      case "books":
        return "<Books />";
      case "books/add":
        return "<AddBook />";
      case "members":
        return " <Members />";
      case "members/add":
        return "<AddMember />";
      case "transactions":
        return "<Transactions />";
      case "transactions/add":
        return "<AddTransaction />";
      case "reports":
        return " <Reports />";
      case "settings":
        return "<Settings />";
      default:
        if (currentPage.startsWith("books/edit/")) {
          return "<EditBook />";
        } else if (currentPage.startsWith("members/edit/")) {
          return "<EditMember />";
        }
        return <NotFound />;
    }
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigate }}>
      <Layout>
        {renderPage()}
      </Layout>
    </NavigationContext.Provider>
  );
}

export default App;
