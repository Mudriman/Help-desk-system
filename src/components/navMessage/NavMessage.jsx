import React from 'react';
import './navmessage.scss';

const NavMessage = () => {
    return (
        <div className='main'>
            <li className="nav-item dropdown">
                <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
                    <i className="bi bi-chat-left-text"></i>
                    <span className="badge bg-primary badge-number">2</span>
                </a>

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li className="dropdown-header">
                    У вас 2 новых сообщения
                    <a href='#'>
                        <span className="badge rounded-pill bg-primary p-2 ms-2">
                            View all
                        </span>
                    </a>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                    <a href="#">
                        <img 
                            src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                            alt="" 
                            className="rounded-circle" 
                        />
                        <div>
                            <h4>Babie Clure</h4>
                            <p>
                                Velit asperiores et ducimus soluta repudiandae labore officia
                            </p>
                            <p>6 hrs. ago</p>
                        </div>
                    </a>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                    <a href="#">
                        <img 
                            src="https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg" 
                            alt="" 
                            className="rounded-circle" 
                        />
                        <div>
                            <h4>Gandzi Ha</h4>
                            <p>
                                Velit asperiores et ducimus soluta repudiandae labore officia
                            </p>
                            <p>8 hrs. ago</p>
                        </div>
                    </a>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                    <a href="#">
                        <img 
                            src="https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg" 
                            alt="" 
                            className="rounded-circle" 
                        />
                        <div>
                            <h4>Maria Hudson</h4>
                            <p>
                                Velit asperiores et ducimus soluta repudiandae labore officia
                            </p>
                            <p>4 hrs. ago</p>
                        </div>
                    </a>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="dropdown-footer">
                    <a href="#">Show all messages</a>
                </li>
            </ul>
            </li>
        </div>
    );
};

export default NavMessage;