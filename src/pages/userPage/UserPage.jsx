import React, { useState, useEffect } from 'react';
import './userPage.scss';
import PageTitle from '../../components/pageTitle/PageTitle';
import UserProfile from '../../components/userProfile/UserProfile';

const UserPage = () => {

    return (
        <div className='mainUser'>
            <PageTitle page='Профиль' />
            <UserProfile/>
        </div>
    );
};

export default UserPage;