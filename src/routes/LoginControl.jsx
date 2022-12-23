import { Navigate } from 'react-router-dom';

const LoginRoute = ({ children }) => {
  const token = !!localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

const NotLoginRoute = ({ children }) => {
  const token = !!localStorage.getItem('token');
  return token ? <Navigate to="/home" /> : children;
};
export { LoginRoute, NotLoginRoute };
