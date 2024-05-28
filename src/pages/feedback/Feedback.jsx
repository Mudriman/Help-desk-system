import React from 'react';
import './feedback.scss';

const Feedback = () => {
    return (
        <div className="feedback">
            <div className="marginer"></div>
            <div className="content">
                <div className="header">
                    Обратная связь
                </div>
                <div className="mainContent">
                    Основной контент
                </div>
            </div>
        </div>
    );
};

export default Feedback;