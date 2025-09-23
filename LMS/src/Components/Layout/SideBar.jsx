import React from "react";
import { useNavigation } from "../../App";

const SideBar = () => {
  const { currentPage, navigate } = useNavigation();
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "fas fa-chart-bar" },
    { id: "books", label: "Books", icon: "fas fa-book" },
    { id: "members", label: "Members", icon: "fas fa-users" },
    { id: "transactions", label: "Transactions", icon: "fas fa-exchange-alt" },
    { id: "reports", label: "Reports", icon: "fas fa-chart-pie" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" },
  ];
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <i className="fas fa-book-open"></i>
        <h2>Library System</h2>
      </div>

      <div className="sidebar-menu">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              {/* <a href="#" className="nav-link active" data-page={item.label}>
                <i className={item.icon}></i> <span>{item.label}</span>
              </a> */}

              <button
                className={currentPage === item.id ? "active" : ""}
                onClick={() => navigate(item.id)}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
