import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


function Navbar() {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <div>
                    <NavLink to='/Profile' activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to='Dialogs' activeClassName={s.activeLink}>Messages</NavLink>
                </div>
                <div>
                    <NavLink to='Users' activeClassName={s.activeLink}>Users</NavLink>
                </div>
                <div>
                    News
                </div>
                <div>
                    Music
                </div>
                <div>
                    Settings
                </div>
            </div>
        </div>
    )
}

export default Navbar