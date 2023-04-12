import React from 'react';

const Header = ({ handleSearch }) => {
  return (
    <header className="header">
      <div className="header__search">
        <input
          type="search"
          placeholder="Search users by Name"
          onChange={handleSearch}
        />
      </div>
    </header>
  );
};

export default Header;