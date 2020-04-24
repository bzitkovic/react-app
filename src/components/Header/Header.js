import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './Header.scss';

const links = {
    speakers: 'Speaker',
    events: 'Events',
    toDo: 'ToDo'
}

const Header = () => {  
    return (
        <header className="HeaderMain">
            <div className="HeaderMain-Inner">
                <NavLink to="/"> <img src={Logo} alt="foi-logo"/> </NavLink>
                <nav>
                    <ul>
                        <li><NavLink to="/speakers" activeStyle={{ fontWeight: "bold", color: "red"}} > {links.speakers} </NavLink></li>
                        <li><NavLink to="/events" activeStyle={{fontWeight: "bold",color: "red"}} > {links.events} </NavLink></li>
                        <li><NavLink to="/toDo" activeStyle={{fontWeight: "bold",color: "red"}}> {links.toDo} </NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
