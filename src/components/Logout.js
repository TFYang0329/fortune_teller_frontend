import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

function Logout() {
    const { logout } = useContext(AuthContext); // 使用 logout 方法
    const navigate = useNavigate();

    const returnHomePage = (e) => {
        e.preventDefault();
        logout();
        navigate('/');
      };

    return (
        <header style={{ cursor: 'pointer', padding: '10px' }} onClick={returnHomePage}>
          <p id="logout">登出</p>
        </header>
      );
}

export default Logout
