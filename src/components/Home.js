import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
      <div className="container">
        <h1>玄門易經卜卦</h1>
        <div className="button-container">
          <p id='intro'>
            歡迎來到玄門易經卜卦網站<br/>
            這個網站是由一群玄門的弟子所成立<br/>
            希望能讓站在十字路口的你獲得一點方向<br/><br/>
            我們都還沒出師<br/>
            因此都不會跟你收取任何的費用<br/>
          </p>
          <br/>
          <br/>
          <p>
            為了保護個人的隱私<br/>
            請登入你的帳號或是註冊一個新的帳號
          </p>
          <button onClick={() => navigate('/login')}>登入</button>
          <button onClick={() => navigate('/signup')}>註冊帳號</button>
        </div>
      </div>
    );
}

export default Home;
