import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './leftnavbar.scss';


const SideBarFooter = () => {
    const today = new Date();
    const [year] = useState(today.getFullYear())

    return (
        <div className='footerWrapper'>
            <div className='footer'>
                <li>
                    <NavLink to="faq">FAQ</NavLink>
                </li>
                <i className='fa-solid fa-circle'></i>
                <li>
                    <NavLink to="feedback">Обратная связь</NavLink>
                </li>
                <i className='fa-solid fa-circle'></i>
                <li>
                    <NavLink to="about">О нас</NavLink>
                </li>
                <i className='fa-solid fa-circle'></i>
            </div>
            <div className='subFooter'>© 2020 - {year}, все авторские права учтены</div>
        </div>
    );
};

export default SideBarFooter;