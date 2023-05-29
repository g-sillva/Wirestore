import React, { useState } from 'react';
import './Header.scss';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = ({ inputVal = '' }) => {
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(inputVal);

  return (
    <header className="header-component-container">
      <div className="header-component">
        <div className="header-options">
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
        <div className="header-title-container">
          <h1 className="header-title">WIRESTORE</h1>
        </div>
        <div className="header-buttons">
          {isSearchInputOpen && (
            <div className="input-container">
              <input
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search..."
                value={searchValue}
              />
            </div>
          )}
          <div
            className="search-container"
            onClick={() => setIsSearchInputOpen(!isSearchInputOpen)}
          >
            <SearchOutlinedIcon />
          </div>
          <div className="cart-container">
            <ShoppingCartOutlinedIcon />
            <span>2</span>
          </div>
          <div className="profile-container">
            <PersonIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
