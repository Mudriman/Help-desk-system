import React from 'react';
import './navavatar.scss';

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
                        <h6>Admin</h6>
                        <span>Main admin</span>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>

                    <li>
                        <a href="#" className="dropdown-item d-flex align-items-center">
                            <i className="bi bi-person"></i>
                            <span>My profile</span>
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <a href="#" className="dropdown-item d-flex align-items-center">
                            <i className="bi bi-gear"></i>
                            <span>Account settings</span>
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <a href="#" className="dropdown-item d-flex align-items-center">
                            <i className="bi bi-question-circle"></i>
                            <span>Need Help?</span>
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <a href="#" className="dropdown-item d-flex align-items-center">
                            <i className="bi bi-box-arrow-right"></i>
                            <span>Sign out</span>
                        </a>
                    </li>
                </ul>
            </li>
        </div>
    );
};

export default NavAvatar;