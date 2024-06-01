import React, { useState } from 'react';
import './newticket.scss';
import PageTitle from '../../components/pageTitle/PageTitle';
import { Link } from 'react-router-dom';

const NewTicket = () => {
    const [formData, setFormData] = useState({
        department: '',
        inventoryNumber: '',
        deviceName: '',
        location: '',
        malfunction: '',
        responsibleUser: '',
        userPhoneNumber: '',
        itRepresentative: '',
        itRepresentativePhoneNumber: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        // В этой функции можно добавить логику для отправки данных формы на сервер
        console.log(formData);
    };
    return (
        <div className='new-ticket'>
            <PageTitle page='Создать заявку' />
            <div className="backArrow">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <i class="fa-solid fa-arrow-left"></i>
                    <span className="viewButton">Назад</span>
                </Link>
            </div>
            <div className="new-ticket-container">
                <section className="dashboard section">
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col-12 info-field">
                                <label>Подразделение университета:</label>
                                <input type="text" name="department" value={formData.department} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-6 info-field">
                                <label>Инвентарный номер:</label>
                                <input type="text" name="inventoryNumber" value={formData.inventoryNumber} />
                            </div>
                            <div className="col-6 info-field">
                                <label>Наименование устройства:</label>
                                <input type="text" name="deviceName" value={formData.deviceName} />
                            </div>
                        </div>
                       
                            <div className="col-12 problem-description">
                                <h2 className="section-title">Описание проблемы</h2>
                                <textarea className="description-input" placeholder="Пожалуйста, опишите проблему здесь"></textarea>
                            </div>
                       
                        {/* Добавь остальные поля формы аналогично */}
                        <div className="row mb-3">
                            <div className="col-12">
                                <button type="submit">Создать заявку</button>
                            </div>
                        </div>
                    </form>

                </section>
            </div>
        </div>
    );
};

export default NewTicket;