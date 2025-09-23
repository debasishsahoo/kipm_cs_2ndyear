import React from 'react';

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <i className="fas fa-book-open"></i>
                <h2>Library System</h2>
            </div>

            <div className="sidebar-menu">
                <ul>
                    <li><a href="#" className="nav-link active" data-page="dashboard"><i
                        className="fas fa-chart-bar"></i> <span>Dashboard</span></a></li>
                    <li><a href="#" className="nav-link" data-page="books"><i className="fas fa-book"></i>
                        <span>Books</span></a></li>
                    <li><a href="#" className="nav-link" data-page="members"><i className="fas fa-users"></i>
                        <span>Members</span></a></li>
                    <li><a href="#" className="nav-link" data-page="transactions"><i
                        className="fas fa-exchange-alt"></i> <span>Transactions</span></a></li>
                    <li><a href="#" className="nav-link" data-page="reports"><i className="fas fa-chart-pie"></i>
                        <span>Reports</span></a></li>
                    <li><a href="#" className="nav-link" data-page="settings"><i className="fas fa-cog"></i>
                        <span>Settings</span></a></li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;