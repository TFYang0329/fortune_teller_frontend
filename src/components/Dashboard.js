import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import Logout from './Logout';

function Dashboard() {
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
        navigate('/login'); // 若未登入，導向登入頁面
        }
    }, [isAuthenticated, navigate]);

    return (
        <div id='dashboard'>
            <h2>Dashboard</h2>
            <p>這是需要登入後才能看到的頁面。</p>
            <Logout />
        </div>
    );
}

export default Dashboard;
