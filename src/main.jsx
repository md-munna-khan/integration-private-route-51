import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './assets/Layout/MainLayout';
import Home from './assets/components/Home';
import Login from './assets/components/Login';
import Register from './assets/components/Register';

import Orders from './assets/components/Orders';
import PrivateRoute from './assets/components/PrivateRoute';
import AuthProvider from './assets/provider/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'login',
        element: <Login></Login>
      },
      {
        path:'register',
        element: <Register></Register>
      },
      {
        path:'orders',
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
 
  </StrictMode>,
)
