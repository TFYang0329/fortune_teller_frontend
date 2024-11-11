import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { login } = useContext(AuthContext); // 使用 login 方法

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
        navigate('/fortune')
    };

    const handleForgetPassword = (e) => {
        e.preventDefault();
        alert(`忘記密碼:`);
    }

    return (
        <div className="container">
        <h2>登入</h2>
        <form onSubmit={handleSubmit} id="login">
            <div>
            <label>電子郵件：</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            </div>
            <div>
            <label>密碼：</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <button type="forget" onClick={handleForgetPassword}>忘記密碼</button>
            </div>
            <button type="submit">登入</button>
        </form>
        </div>
    );
}

export default Login;
