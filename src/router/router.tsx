import { createBrowserRouter } from 'react-router-dom';
import LoginForm from '../components/Auth/LoginForm';
import RegisterPage from '../components/Auth/RegisterForm';

export default createBrowserRouter([
    {
      path: '/login',
      element: <LoginForm/>,
      children: []
    },
    {
      path: '/register',
      element: <RegisterPage/>,
      children: []
    }
  ]);