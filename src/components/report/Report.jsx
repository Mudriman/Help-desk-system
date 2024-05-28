import React, {useState} from 'react';
import CardFilter from '../cardFilter/CardFilter';
import ReportChart from '../reportCharts/ReportChart';

const Report = () => {
    const [filter, setFilter] = useState('Сегодня');
    const handleFilterChange = filter => {
        setFilter(filter);
    };

    return (
        <div className='card col-xxl-12'>
            <CardFilter filterChange={handleFilterChange} />
            <div className="card-body">
                <h5 className="card-title">
                    Reports <span>/{filter}</span>
                </h5>
                <ReportChart/>
            </div>
        </div>
    );
};

export default Report;