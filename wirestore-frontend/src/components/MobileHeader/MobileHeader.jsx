import React, { useState } from 'react';
import './MobileHeader.scss';

import CloseIcon from '@mui/icons-material/Close';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';

const MobileHeader = ({ inputVal = '', headerItems }) => {
  const [searchValue, setSearchValue] = useState(inputVal);
  const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false);

  return (
    <header className="mobile-header-component-container">
      <div className="mobile-header-full-width-container">
        <div className="mobile-header-title-container">
          <h1 className="mobile-header-title">WIRESTORE</h1>
        </div>
        <div className="mobile-header-full-width-options-container">
          <div className="mobile-header-buttons">
            <div className="cart-container">
              <ShoppingCartOutlinedIcon />
              <span>2</span>
            </div>
          </div>
          <div
            className="menu-container"
            onClick={() => setIsMobileHeaderOpen(true)}
          >
            <MenuIcon />
          </div>
        </div>
      </div>

      <div
        className={`mobile-header-component ${
          isMobileHeaderOpen ? 'mobile-header-open' : ''
        }`}
      >
        <div className="mobile-header-title-container">
          <div
            className="close-container"
            onClick={() => setIsMobileHeaderOpen(false)}
          >
            <CloseIcon />
          </div>
          <h1 className="mobile-header-title">WIRESTORE</h1>
        </div>
        <div className="profile-container">
          <PersonIcon />
        </div>
        <div className="input-container">
          <SearchOutlinedIcon />
          <input
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search..."
            value={searchValue}
          />
        </div>
        <div className="mobile-header-items-container">
          <ul>
            {headerItems.map((x, i) => (
              <li key={i} className="selected">
                {x.display}
              </li>
            ))}
          </ul>
        </div>
        <div className="mobile-header-options">
          <div className="language-container">
            <img src="assets\flags\english_flag.jpg" alt="flag-icon" />
            <p>ENGLISH</p>
            <KeyboardArrowDownIcon />
          </div>
          <div className="currency-container">
            <p className="symbol">$</p>
            <p className="name">USD</p>
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
