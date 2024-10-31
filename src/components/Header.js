import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    // 檢查當前路徑是否在登入或註冊頁面
    const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
    const isLogin = location.pathname !== '/' || location.pathname !== '/login' || location.pathname === '/signup';

    const returnHomePage = () => {
        if (isAuthPage) {
        navigate('/');
        }
    };

    const returnFortunePage = () => {
        if (isLogin) {
            navigate('/fortune')
        }
    };

    return (
        <header style={{ cursor: /*isAuthPage ? 'pointer' : 'default'*/ 'pointer', padding: '10px' }} onClick={isAuthPage ? returnHomePage : returnFortunePage}>
        <p id="header_icon">玄門</p>
        </header>
    );
}

export function Dashboard() {
    const navigate = useNavigate();

    const goDashboard = () => {
        navigate('/dashboard')
    }

    return (
        <header style={{ cursor:  'pointer', padding: '10px' }} onClick={goDashboard}>
            <p id="dashboard_icon">個人資訊</p>
        </header>
    );
}

export default Header;
