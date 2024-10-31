import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    // 若未登入，則重定向至登入頁面
    return <Navigate to="/login" />;
  }

  return children; // 若已登入，則顯示子組件
}

export default ProtectedRoute;
