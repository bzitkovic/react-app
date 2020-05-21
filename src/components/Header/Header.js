import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { HeaderMain, Inner, Navigation, Ul, Li} from './HeaderStyle.js';

const links = {
    speakers: 'Speaker',
    events: 'Events',
    toDo: 'ToDo',
    registration: 'Registration',
    login: 'Login',
    logout: 'Logout',
}

const Header = (props) => {  
    //const history = useHistory();
   
    
    const logout = (e) => {
        localStorage.removeItem('token');
        props.onAuthChange(false);
    }

    return (
        <HeaderMain>
            <Inner>
                <NavLink to="/"> <img src={Logo} alt="foi-logo"/> </NavLink>
                <Navigation>
                    <Ul>
                        <Li><NavLink to="/speakers" activeStyle={{ fontWeight: "bold", color: "red"}} > {links.speakers} </NavLink></Li>
                        <Li><NavLink to="/events" activeStyle={{fontWeight: "bold",color: "red"}} > {links.events} </NavLink></Li>
                        <Li><NavLink to="/toDo" activeStyle={{fontWeight: "bold",color: "red"}}> {links.toDo} </NavLink></Li>
                        { !props.isAuthenticated ?
                        <>
                            <Li><NavLink to="/registration" activeStyle={{fontWeight: "bold",color: "red"}}> {links.registration} </NavLink></Li>
                            <Li><NavLink to="/login" activeStyle={{fontWeight: "bold",color: "red"}}> {links.login} </NavLink></Li> 
                        </> : <Li><NavLink onClick={logout} to="/" activeStyle={{fontWeight: "bold",color: "red"}}> {links.logout} </NavLink></Li>
                        }                    
                    </Ul>
                </Navigation>
            </Inner>
        </HeaderMain>
    );
}

export default Header;
