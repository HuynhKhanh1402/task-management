import React from 'react';

const Navbar = ({ activeMenu }) => {
  return (
    <div className="">
      <button
        className=""
        onClick={() => {
          setOpenSideMenu(!openSideMenu);
        }}
      >
        {openSideMenu ? <HiOutlineX className="" /> : <HIOutlineMenu className="" />}

        <h2>Expense Tracker</h2>
      </button>
    </div>
  );
};

export default Navbar;
