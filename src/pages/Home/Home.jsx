import React, { useState, useEffect } from 'react';
import './home.scss';
import PageTitle from '../../components/pageTitle/PageTitle';
import Footer from '../../components/UI/footer/Footer';
import Table from '../../components/table/Table';
import { Link } from 'react-router-dom';

const Home = () => {
    const [rows, setRows] = useState([]);
    const [column, setColumn] = useState([]);
    const fetchData = () => {
        fetch('http://localhost:4000/userApplicationRow')
            .then(res => res.json())
            .then(data => {
                setColumn(data);
            })
            .catch(e => console.log(e.message));

        fetch('http://localhost:4000/userApplicationColumns')
            .then(res => res.json())
            .then(data => {
                setRows(data);
            })
            .catch(e => console.log(e.message));
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='mainHome'>
            <div className="mainContainer">
                <PageTitle page='Домашнаяя страница' />
                <div className="homeTitle">
                    Добавить новую заявку
                    <Link to="/tickets/new" className="link">
                        Добавить
                    </Link>
                </div>
                <div className="listContainer">
                    <div className="listTitle">Мои заявки</div>
                    <Table columns={column} rows={rows} />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;