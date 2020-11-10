import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';
import BusinessInfo from '../BusinerrInfo/BusinessInfo';
const Header = () => {
    return (
        <div className='header-container'>
            <NavBar></NavBar>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;