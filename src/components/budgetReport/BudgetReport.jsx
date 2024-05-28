import React, {useState} from 'react';
import BudgetChart from '../budgetChart/BudgetChart';
import CardFilter from '../cardFilter/CardFilter';

const BudgetReport = () => {
    const [filter, setFilter] = useState('Сегодня');
    const handleFilterChange = filter => {
        setFilter(filter);
    };
    return (
        <div className='card'>
           <CardFilter filterChange={handleFilterChange}/>
           <div className="card-body pb-0">
                <h5 className="card-title">
                    Budget Report <span>| {filter}</span>
                </h5>
                <BudgetChart/>
           </div>
        </div>
    );
};

export default BudgetReport;