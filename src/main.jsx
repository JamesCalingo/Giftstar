import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import MainPage from './pages/MainPage.jsx'
import SignUp from './pages/SignUp.jsx'
import Account from './pages/Account.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <MainPage />
},
{path: "/signup",
element: <SignUp />},
{path: "/account",
element: <Account />}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
