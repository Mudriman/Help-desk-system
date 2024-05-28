import React from 'react';
import { NavLink } from "react-router-dom";
import './leftnavbar.scss';


const Logo = () => {
    return (
        <div className='LogoWrapper'>
            <NavLink to="/posts">
                <div>
                    <i className="fa-solid fa-ticket"></i>
                </div>
                <h4>TicketAssist</h4>
            </NavLink>
        </div>
    );
};

export default Logo;