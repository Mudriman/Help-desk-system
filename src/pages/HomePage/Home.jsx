import React, {useState} from 'react';
import './Home.scss';
import Widget from '../../components/widget/Widget';
import Feature from '../../components/feature/Feature';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';
import PageTitle from '../../components/pageTitle/PageTitle';
import Analityc from '../../components/analitics/Analityc';
import Footer from '../../components/UI/footer/Footer';



const Home = () => {
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
                    <div className="listTitle">Latest Transaction</div>
                    <Table/>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;