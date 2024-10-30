import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`登入成功！帳號：${formData.email}`);
    // 可以在這裡加入處理登入邏輯
  };

  return (
    <div className="container">
      <h2>登入</h2>
      <form onSubmit={handleSubmit}>
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
        </div>
        <button type="submit">登入</button>
      </form>
    </div>
  );
}

export default Login;
