import React, {useState, useEffect} from 'react';
import './recent.scss';
import CardFilter from '../cardFilter/CardFilter';
import RecentActivityItem from '../resentActivityItem/RecentActivityItem';

const RecentActivity = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Сегодня');
    const handleFilterChange = filter => {
        setFilter(filter);
    };

    const fetchData = () => {
        fetch('http://localhost:4000/resentactivity')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
            .catch(e => console.log(e.message));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='card'>
            <CardFilter filterChange={handleFilterChange}/>
            <div className="card-body">
                <h5 className="card-title">
                    Последняя активность <span>\ {filter}</span>
                </h5>
                
                <div className="activity">
                    {items &&
                        items.length > 0 &&
                        items.map(item => (
                            <RecentActivityItem key={item._id } item={item}/>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default RecentActivity;