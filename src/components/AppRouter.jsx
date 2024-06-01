import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Error from '../pages/Error/Error';
import { privateRoutes, publicRoutes } from '../router';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    if(isLoading) {
        return <Loader/>
    }
    return (
        isAuth
                ? <Routes>
                    {privateRoutes.map(route => 
                        <Route 
                            key={route.path}
                            element={<route.component />} 
                            path={route.path} 
                            exact={route.exact}
                        />
                     )}
                     <Route path="/login" element={<Navigate to="/home" replace />} />
                    <Route path="/" element={<Navigate to="/" replace />} />
                    <Route path="*" element={<Error />} />
                 </Routes>
                : <Routes>
                    {publicRoutes.map(route => 
                        <Route 
                            key={route.path}
                            element={<route.component />} 
                            path={route.path} 
                            exact={route.exact}
                        />
                    )}
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
    );
};

export default AppRouter;
