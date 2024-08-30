import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ onSelection }) => {
  const [selectedItem, setSelectedItem] = useState('Dashboard');
  const [openItems, setOpenItems] = useState({});  

  const handleSelection = (item) => {
    setSelectedItem(item);
    onSelection(item);
  };

  const toggleSubmenu = (item) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  return (
    <div className="sidebar">
      <ul>
        {['Dashboard', 'Inventory', 'Order', 'Returns', 'Customers', 'Shipping', 'Channel', 'Integrations'].map((item) => (
          <li
            key={item}
            className={selectedItem === item ? 'active' : ''}
            onClick={() => handleSelection(item)}
          >
            {item}
          </li>
        ))}

        <li
          className={openItems['Calculators'] ? 'active' : ''}
          onClick={() => toggleSubmenu('Calculators')}
        >
          Calculators
          <span className={`arrow ${openItems['Calculators'] ? 'down' : 'right'}`} />
        </li>
        {openItems['Calculators'] && (
          <ul className="submenu">
            <li onClick={() => handleSelection('First')}>First</li>
            <li onClick={() => handleSelection('Second')}>Second</li>
            <li onClick={() => handleSelection('Third')}>Third</li>
          </ul>
        )}

        <li
          className={openItems['Reports'] ? 'active' : ''}
          onClick={() => toggleSubmenu('Reports')}
        >
          Reports
          <span className={`arrow ${openItems['Reports'] ? 'down' : 'right'}`} />
        </li>
        {openItems['Reports'] && (
          <ul className="submenu">
            <li onClick={() => handleSelection('First Report')}>First</li>
            <li onClick={() => handleSelection('Second Report')}>Second</li>
            <li onClick={() => handleSelection('Third Report')}>Third</li>
          </ul>
        )}

        <li
          className={openItems['Account'] ? 'active' : ''}
          onClick={() => toggleSubmenu('Account')}
        >
          Account
          <span className={`arrow ${openItems['Account'] ? 'down' : 'right'}`} />
        </li>
        {openItems['Account'] && (
          <ul className="submenu">
            <li onClick={() => handleSelection('First Account')}>First</li>
            <li onClick={() => handleSelection('Second Account')}>Second</li>
            <li onClick={() => handleSelection('Third Account')}>Third</li>
          </ul>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
