import React from 'react';
import "./Navigation.css"
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <nav>
        <ul>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to='/overview'>Alle posts</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to='/post'>Nieuwe post</NavLink>
            </li>
        </ul>
        </nav>
    );
}

export default Navigation;