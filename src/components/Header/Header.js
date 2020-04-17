import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './Header.scss';

const links = {
    speakers: 'Speaker',
    events: 'Events'
}

const Header = () => {  
    return (
        <header className="header-main">
            <div className="header-main__inner">
                <Link to="/"> <img src={Logo} alt="foi-logo"/> </Link>
                <nav>
                    <ul>
                        <li><Link to="/speakers"> {links.speakers} </Link></li>
                        <li><Link to="/events"> {links.events} </Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
