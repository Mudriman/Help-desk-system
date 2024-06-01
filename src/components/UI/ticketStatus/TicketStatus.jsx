import React from 'react';
import './ticketstatus.scss';

const TicketStatus = () => {
    return (
        <div className='ticketstatus bg-primary text-white d-flex align-items-center justify-content-between'>
            <div className="leftTicket">
                Заявка № 1231232432 от 03.05.2024 17:27
            </div>
            <div className="rightTicket d-flex align-items-center">
                <div className="container d-flex">
                    <div className="column flex-grow-1">
                        <div className="level">
                            <span>Критичность</span>
                        </div>
                        <div className="level">
                            <span className='bolder_text'>Обычная</span>
                        </div>
                    </div>
                    <div className="divider bg-light"></div>
                    <div className="column flex-grow-2">
                        <div className="level">
                            <span>Стадия / статус</span>
                        </div>
                        <div className="level">
                            <span className='bolder_text'>Новая / Новая</span>
                        </div>
                    </div>
                    <div className="divider bg-light"></div>
                    <div className="column flex-grow-1">
                        <div className="level">
                            <span className='bolder_text'>Перейти на стадию</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketStatus;