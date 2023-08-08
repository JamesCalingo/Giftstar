import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages/MainPage.jsx'
import SignUp from '../pages/SignUpPage.jsx'
import Account from '../pages/AccountPage.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <MainPage />
},
{path: "/signup",
element: <SignUp />},
{path: "/account",
element: <Account />}])

export default router