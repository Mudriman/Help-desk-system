import React, { useState, useEffect } from 'react';
import './analitic.scss';
import Report from '../report/Report';
import RecentActivity from '../recentActivity/RecentActivity';
import BudgetReport from '../budgetReport/BudgetReport';
import WebTraffic from '../webTraffic/WebTraffic';
import Cards from '../UI/cards/Cards';

const Analityc = () => {
    return (
        <div className='analitics'>
            <section className="dashboard section">
                <div className="row">
                        <div className="col-lg-8">
                            <div className="row card-row">
                            <Cards/>
                            </div>
                    </div>
                    <div className="col-12">
                            <Report/>
                    </div>
                    <div className="col-6">
                        <BudgetReport/>
                    </div>
                    <div className="col-6">
                        <WebTraffic/>
                    </div>
                    <div className="col-12">
                        <RecentActivity/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Analityc;