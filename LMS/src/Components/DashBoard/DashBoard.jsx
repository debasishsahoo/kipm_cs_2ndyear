import React from 'react';
import { useNavigation } from '../../App';
import './Dashboard.css';

const Dashboard = () => {
    const { navigate } = useNavigation();

    return (
        <div className="content">
            <div className="page-header">
                <div>
                    <h1>Dashboard</h1>
                    <p>Welcome to Library Management System</p>
                </div>
            </div>

            <div className="stats-container">
                <div className="stat-card">
                    <div className="stat-icon" style={{background: '#3498db'}}>
                        <i className="fas fa-book"></i>
                    </div>
                    <div className="stat-info">
                        <div className="stat-number">5,243</div>
                        <div className="stat-title">Total Books</div>
                        <div className="stat-trend trend-up">
                            <i className="fas fa-arrow-up"></i> 125 this month
                        </div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon" style={{background: '#2ecc71'}}>
                        <i className="fas fa-users"></i>
                    </div>
                    <div className="stat-info">
                        <div className="stat-number">1,872</div>
                        <div className="stat-title">Active Members</div>
                        <div className="stat-trend trend-up">
                            <i className="fas fa-arrow-up"></i> 32 this month
                        </div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon" style={{background: '#f39c12'}}>
                        <i className="fas fa-exchange-alt"></i>
                    </div>
                    <div className="stat-info">
                        <div className="stat-number">384</div>
                        <div className="stat-title">Borrowed Books</div>
                        <div className="stat-trend trend-down">
                            <i className="fas fa-exclamation-circle"></i> 12 overdue
                        </div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon" style={{background: '#9b59b6'}}>
                        <i className="fas fa-clock"></i>
                    </div>
                    <div className="stat-info">
                        <div className="stat-number">47</div>
                        <div className="stat-title">New Arrivals</div>
                        <div className="stat-trend">This week</div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h3>Recent Activities</h3>
                    <button className="btn btn-primary btn-sm" onClick={() => navigate('transactions/add')}>
                        <i className="fas fa-plus"></i> New Transaction
                    </button>
                </div>
                <table className="data-table">
                    <thead>
                    <tr>
                        <th>Member</th>
                        <th>Book</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>John Smith</td>
                        <td>The Great Gatsby</td>
                        <td>Oct 12, 2023</td>
                        <td><span className="status-returned">Returned</span></td>
                        <td>
                            <button className="btn btn-primary btn-sm">
                                <i className="fas fa-eye"></i> View
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Emma Wilson</td>
                        <td>To Kill a Mockingbird</td>
                        <td>Oct 11, 2023</td>
                        <td><span className="status-borrowed">Borrowed</span></td>
                        <td>
                            <button className="btn btn-primary btn-sm">
                                <i className="fas fa-eye"></i> View
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Michael Brown</td>
                        <td>1984</td>
                        <td>Oct 10, 2023</td>
                        <td><span className="status-overdue">Overdue</span></td>
                        <td>
                            <button className="btn btn-primary btn-sm">
                                <i className="fas fa-eye"></i> View
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Sarah Johnson</td>
                        <td>Pride and Prejudice</td>
                        <td>Oct 9, 2023</td>
                        <td><span className="status-returned">Returned</span></td>
                        <td>
                            <button className="btn btn-primary btn-sm">
                                <i className="fas fa-eye"></i> View
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;