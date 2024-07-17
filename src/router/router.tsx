import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import HomePage from '../pages/HomePage';

export default createBrowserRouter([
    {
      path: '/login',
      element: <Login/>,
      children: []
    },
    {
      path: '/register',
      element: <Register/>,
      children: []
    },
    {
      path: '/homepage',
      element: <HomePage/>,
      children: []
    }

  ]);