import React, { useState, useEffect } from 'react';
import './singleapplication.scss';
import { Link } from 'react-router-dom';
import TicketStatus from '../UI/ticketStatus/TicketStatus';
import CommentSection from '../UI/commentSection/CommentSection';

const SingleApplication = () => {
    const [comments, setComments] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:4000/comments')
            .then(res => res.json())
            .then(data => {
                setComments(data);
            })
            .catch(e => console.log(e.message));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const addComment = (comment) => {
        setComments([...comments, comment]);
        // Отправка нового комментария на сервер
        fetch('http://localhost:4000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        }).catch(err => console.log(err));
    };

    return (
        <div className='single-application'>
            <div className="backArrow">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <i class="fa-solid fa-arrow-left"></i>
                    <span className="viewButton">Назад</span>
                </Link>
            </div>
            <TicketStatus />
            <div className="ticket-container">
                <section className="dashboard section">
                    <div className="row mb-3">
                        <div className="col-12 info-field">
                            <label>Подразделение университета:</label>
                            <span>Факультет информационных технологий</span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6 info-field">
                            <label>Инвентарный номер:</label>
                            <span>123456789</span>
                        </div>
                        <div className="col-6 info-field">
                            <label>Наименование устройства:</label>
                            <span>Ноутбук Dell XPS 15</span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12 info-field">
                            <label>Местонахождение техники:</label>
                            <span>Кабинет 101, Корпус А</span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6 info-field">
                            <label>Проявление неисправности:</label>
                            <span>Не включается</span>
                        </div>
                        <div className="col-6 info-field">
                            <label>Ответственный пользователь:</label>
                            <span>Иванов Иван Иванович</span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6 info-field">
                            <label>Контактный телефон Пользователя:</label>
                            <span>+7 (123) 456-78-90</span>
                        </div>
                        <div className="col-6 info-field">
                            <label>Представитель управления информатизации:</label>
                            <span>Петров Петр Петрович</span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12 info-field">
                            <label>Контактный телефон Представителя управления Информатизацией:</label>
                            <span>+7 (098) 765-43-21</span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6 info-field">
                            <label>Дата регистрации заявки:</label>
                            <span>01.06.2024</span>
                        </div>
                        <div className="col-6 info-field">
                            <label>Заявка принята исполнителем:</label>
                            <span>02.06.2024</span>
                        </div>
                    </div>
                </section>
                <CommentSection comments={comments} addComment={addComment} />
            </div>
        </div>
    );
};

export default SingleApplication;