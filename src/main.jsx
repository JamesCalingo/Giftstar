import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import {router} from './navigation/router'
import App from './App.jsx'
import './index.css'
import MainPage from './pages/MainPage.jsx'
import SignUp from './pages/SignUpPage.jsx'
import Account from './pages/AccountPage.jsx'
import CreateListPage from './pages/CreateListPage.jsx'
import ListPage from './pages/ListPage.jsx'
import Navbar from './components/Navbar.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <MainPage />
},
{
  path: "/signup",
  element: <SignUp />
},
{
  path: "/account",
  element: <Account />
},
{
  path: "/list",
  element: <ListPage />
},
{
  path: "/createlist",
  element: <CreateListPage />
},
{
  path: "*",
  element: <ErrorPage />
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
