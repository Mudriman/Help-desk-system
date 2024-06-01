import React from 'react';
import './navnotice.scss';

const NavNotice = () => {
    return (
        <li className='nav-item dropdown'>
            <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">4</span>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                    У вас 4 новых уведомления
                    <a href='#'>
                        <span className="badge rounded-pill bg-primary p-2 ms-2">
                            Посмотреть все
                        </span>
                    </a>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning"></i>
                    <div>
                        <h4>Осторожно</h4>
                        <p>Вы давно не меняли пароль</p>
                        <p>30 мин. назад</p>
                    </div>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                    <i className="bi bi-x-circle text-danger"></i>
                    <div>
                        <h4>Ваш запрос отклонен</h4>
                        <p>Директор не может одобрить</p>
                        <p>1 ч.назад</p>
                    </div>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                    <i className="bi bi-check-circle text-success"></i>
                    <div>
                        <h4>Решено</h4>
                        <p>Ваша заявка поменяла статус</p>
                        <p>1 ч.назад</p>
                    </div>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                    <i className="bi bi-info-circle text-primary"></i>
                    <div>
                        <h4>Новое</h4>
                        <p>У вас новый комментарий</p>
                        <p>4 ч.назад</p>
                    </div>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="dropdown-footer">
                    <a href="#">Показать все</a>
                </li>
            </ul>
        </li>
    );
};

export default NavNotice;