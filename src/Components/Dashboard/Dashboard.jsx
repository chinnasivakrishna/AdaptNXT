import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import LineChart from '../LineChart/LineChart';
import PieChart from '../PieChart/PieChart';
import './Dashboard.css';

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState('Dashboard');

  return (
    <div className="dashboard-container">
      <Sidebar onSelection={setSelectedItem} />
      <div className="main-content">
        {selectedItem === 'Dashboard' ? (
          <div>
           <div className="top-display"><div className='flex'>{selectedItem}</div></div>
          <div className="chart-container">
            
            <LineChart />
            <PieChart />
          </div></div>
        ) : (
          <h1 className="selected-item-display">{selectedItem}</h1>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
