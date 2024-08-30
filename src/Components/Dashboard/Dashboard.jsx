import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import LineChart from '../LineChart/LineChart';
import PieChart from '../PieChart/PieChart';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <div className="chart-container">
          <LineChart />
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
