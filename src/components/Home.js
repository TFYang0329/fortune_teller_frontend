import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Welcome to 玄門</h1>
      <div className="button-container">
        <button onClick={() => navigate('/login')}>登入</button>
        <button onClick={() => navigate('/signup')}>創建帳號</button>
      </div>
    </div>
  );
}

export default Home;
