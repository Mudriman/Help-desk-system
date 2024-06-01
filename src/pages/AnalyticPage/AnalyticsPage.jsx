import React, {useState, useEffect} from 'react';
import './analytic.scss';
import Widget from '../../components/widget/Widget';
import Feature from '../../components/feature/Feature';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';
import PageTitle from '../../components/pageTitle/PageTitle';
import Analityc from '../../components/analitics/Analityc';
import Footer from '../../components/UI/footer/Footer';



const Home = () => {
    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);
    const fetchData = () => {
        fetch('http://localhost:4000/userApplicationRow')
            .then(res => res.json())
            .then(data => {
                setColumns(data);
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
        <div className='home'>
            <div className="homeContainer">
                <PageTitle page='Аналитика'/>
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance"/>
                </div>
                <div className="analitycContainer">
                    <div className="analitycTitle">Главные показатели</div>
                    <Analityc/>
                </div>
                <div className="charts">
                    <Feature/>
                    <Chart title="Last 6-th Months (Revenue)" aspect={2 / 1}/>
                </div>
                <div className="listContainer">
                    <div className="listTitle">Последние Заявки</div>
                    <Table columns={columns} rows={rows} />
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;