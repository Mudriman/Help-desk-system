import React from 'react';
import './cardfilter.scss';

const CardFilter = ({filterChange}) => {
    return (
        <div className='filter'>
            <a href="#" className="icon" data-bs-toggle="dropdown">
                <i className="bi bi-three-dots"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                </li>
                <li>
                    <a href="#" className="dropdown-item" onClick={() => filterChange('Сегодня')}>
                        Сегодня
                    </a>
                </li>
                <li>
                    <a href="#" className="dropdown-item" onClick={() => filterChange('В этом месяце')}>
                        В этом месяце
                    </a>
                </li>
                <li>
                    <a href="#" className="dropdown-item" onClick={() => filterChange('В этом году')}>
                        В этом году
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default CardFilter;