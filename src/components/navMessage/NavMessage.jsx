import React from 'react';
import './navmessage.scss';

const NavMessage = () => {
    return (
        <div className='main'>
            <li className="nav-item dropdown">
                <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
                    <i className="bi bi-chat-left-text"></i>
                    <span className="badge bg-primary badge-number">3</span>
                </a>

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li className="dropdown-header">
                    У вас 2 новых сообщения
                    <a href='#'>
                        <span className="badge rounded-pill bg-primary p-2 ms-2">
                            Посмотреть все
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
                            <h4>Сергей Головин</h4>
                            <p>
                                Вам пришла заявка на ремонт техники
                            </p>
                            <p>6 ч. назад</p>
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
                            <h4>Валерий Мечиков</h4>
                            <p>
                                Решено: заявка на модификацию!
                            </p>
                            <p>8 ч. назад</p>
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
                            <h4>Мария Хадсон</h4>
                            <p>
                                Возьмите пожалуйста мою заявку!
                            </p>
                            <p>4 ч. назад</p>
                        </div>
                    </a>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="dropdown-footer">
                    <a href="#">Показать все</a>
                </li>
            </ul>
            </li>
        </div>
    );
};

export default NavMessage;