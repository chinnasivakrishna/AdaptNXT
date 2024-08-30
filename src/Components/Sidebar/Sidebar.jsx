import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ onSelection }) => {
  const [selectedItem, setSelectedItem] = useState('Dashboard');

  const handleSelection = (item) => {
    setSelectedItem(item);
    onSelection(item);  // Pass the selected item to the parent component
  };

  return (
    <div className="sidebar">
      <ul>
        {['Dashboard', 'Inventory', 'Order', 'Returns', 'Customers', 'Shipping', 'Channel', 'Integrations', 'Calculators', 'Reports', 'Account'].map(item => (
          <li
            key={item}
            className={selectedItem === item ? 'active' : ''}
            onClick={() => handleSelection(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
