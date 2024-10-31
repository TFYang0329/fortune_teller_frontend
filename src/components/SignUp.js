import React, { useState } from 'react';

function SignUp() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`註冊成功！歡迎，${formData.name}`);
      // 可以在這裡加入處理註冊邏輯
    };

    return (
      <div className="container">
        <h2>創建帳號</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>姓名：</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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
          <button type="submit">註冊</button>
        </form>
      </div>
    );
}

export default SignUp;
