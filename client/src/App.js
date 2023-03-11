import React from 'react'
import { createBrowserRouter,RouterProvider, useNavigate} from 'react-router-dom'

import  {
  Dashboard,
  Login
} from './view'

const App = () => {
    const router = createBrowserRouter([
      {  
        path : '/auth/login',
        element : <Login />
      },

      {  
        path : '/user/dashboard',
        element : <Dashboard />
      }
    ])
  return (
    <>
        <main>
          <RouterProvider router={router}></RouterProvider>
        </main>
    </>
  )
}

export default App