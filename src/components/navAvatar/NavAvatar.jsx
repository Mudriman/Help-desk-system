import React from 'react';
import './navavatar.scss';
import { Link } from 'react-router-dom';

const NavAvatar = () => {
    return (
        <div>
            <li className='nav-item dropdown pe-3'>
                <a
                    href="#"
                    className="nav-link nav-profile d-flex align-items-center pe-0"
                    data-bs-toggle="dropdown"
                >
                    <img
                        src="https://i0.wp.com/blogs.embarcadero.com/wp-content/uploads/2020/07/pexels-photo-941693.jpeg?ssl=1"
                        alt=""
                        className="avatar"
                    />
                </a>

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <li className="dropdown-header">
                        <h6>Админ</h6>
                        <span>Главный админ</span>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>

                    <li>
                        <Link to="/profile" className="dropdown-item d-flex align-items-center">
                            <i className="bi bi-person"></i>
                            <span>Мой профиль</span>
                        </Link>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <a href="#" className="dropdown-item d-flex align-items-center">
                            <i className="bi bi-gear"></i>
                            <span>Настройки аккаунта</span>
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <a href="#" className="dropdown-item d-flex align-items-center">
                            <i className="bi bi-question-circle"></i>
                            <span>Нужна помощь?</span>
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <a href="#" className="dropdown-item d-flex align-items-center">
                            <i className="bi bi-box-arrow-right"></i>
                            <span>Выйти</span>
                        </a>
                    </li>
                </ul>
            </li>
        </div>
    );
};

export default NavAvatar;