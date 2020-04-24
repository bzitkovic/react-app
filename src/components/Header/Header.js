import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { HeaderMain, Inner } from './HeaderStyle.js';

const links = {
    speakers: 'Speaker',
    events: 'Events',
    toDo: 'ToDo'
}

const Header = () => {  
    return (
        <HeaderMain>
            <Inner>
                <NavLink to="/"> <img src={Logo} alt="foi-logo"/> </NavLink>
                <nav>
                    <ul>
                        <li><NavLink to="/speakers" activeStyle={{ fontWeight: "bold", color: "red"}} > {links.speakers} </NavLink></li>
                        <li><NavLink to="/events" activeStyle={{fontWeight: "bold",color: "red"}} > {links.events} </NavLink></li>
                        <li><NavLink to="/toDo" activeStyle={{fontWeight: "bold",color: "red"}}> {links.toDo} </NavLink></li>
                    </ul>
                </nav>
            </Inner>
        </HeaderMain>
    );
}

export default Header;
