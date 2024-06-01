import React from 'react';
import SingleApplication from '../../components/singleApplication/SingleApplication';
import './singleApplicationPage.scss';
import PageTitle from '../../components/pageTitle/PageTitle';
import Footer from '../../components/UI/footer/Footer';

const SingleApplicationPage = () => {
    return (
        <div className='singleapplicationpage'>
            <PageTitle page='Информация о заявке' />
            <SingleApplication/>
            <Footer />
        </div>
    );
};

export default SingleApplicationPage;