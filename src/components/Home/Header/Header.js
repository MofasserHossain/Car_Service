import React from 'react';
import NavbarComponent from '../../Shared/NavbarCompoment/NavbarComponent';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
  return (
    <>
      <header>
        <NavbarComponent />
        <HeaderMain />
      </header>
    </>
  );
};

export default Header;
