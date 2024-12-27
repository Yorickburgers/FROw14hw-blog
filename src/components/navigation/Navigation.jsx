import React from 'react';
import "./Navigation.css"
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <span>
                <img src="../../../src/assets/logo-medium.png" alt="logo of BlOgventure"/>
            </span>
        <ul>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to='/posts'>Alle posts</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to='/post'>Nieuwe post</NavLink>
            </li>
        </ul>
        </nav>
    );
}

export default Navigation;