import React from 'react';
import './userProfile.scss';

const UserProfile = () => {
    const user = {
        name: 'Иван Иванов',
        email: 'ivan.ivanov@example.com',
        phone: '+7 123 456 78 90',
        department: 'Факультет информационных технологий',
        profileImage: 'https://i0.wp.com/blogs.embarcadero.com/wp-content/uploads/2020/07/pexels-photo-941693.jpeg?ssl=1' // Путь к изображению профиля
    };
    

    return (
        <div className="user-profile">
            <div className="profile-header">
                <img src={user.profileImage} alt="Profile" className="profile-image" />
                <div className="user-info">
                    <h1>{user.name}</h1>
                    <p>Email: {user.email}</p>
                    <p>Телефон: {user.phone}</p>
                    <p>Подразделение: {user.department}</p>
                </div>
            </div>
            <div className="profile-actions">
                <button className="btn btn-primary">Редактировать профиль</button>
            </div>
        </div>
    );
};

export default UserProfile;