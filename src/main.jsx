import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import ErrorPage from './components/ErrorPage'
import './index.css'
import Login from './components/Login'
import Register from './components/Register'
import AuthProviders from './components/provider/AuthProviders'

import Feedback from './components/Feedback'
import CollegeCard from './components/CollegeCard'
import College from './College'
import Colleges from './components/Colleges'
import Admission from './components/Admission'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage />,
    loader: () => fetch('https://assignment-twelve-server-pi.vercel.app/users')
  },

  {
    path: 'register',
    element: <Register />

  },
  {
    path: 'admission',
    element: <Admission/>,
    loader: () => fetch('https://assignment-twelve-server-pi.vercel.app/users')
  },
  {
    path: 'login',
    element: <Login />
  },

  {
    path: 'myCollege',
    element: <CollegeCard/>
  },
  {
    path: '/college/:id',
    element: <College/>
  },
  {
    path: 'colleges',
    element: <Colleges/>,
    loader: () => fetch('https://assignment-twelve-server-pi.vercel.app/users')
  },
  {
    path: 'feedback/:id',
    element: <Feedback/>,
    loader: () => fetch('https://assignment-twelve-server-pi.vercel.app/classes')
  }
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProviders>
    <RouterProvider router={router} />
  </AuthProviders>

);
