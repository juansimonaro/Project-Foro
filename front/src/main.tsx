import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './routes/login.tsx'
import { Signup } from './routes/signup.tsx'
import { Dash } from './routes/dash.tsx'
import { Protect } from './routes/Routes.Protect.tsx'
import { AuthProv } from './auth/AuthProvided.tsx'
import '../public/styles/bootstrap.min.css';
import '../public/styles/styles.css'
import '../public/styles/comunity.css'
import '../public/styles/chat.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Protect />,
    children: [
      {
        path: "/dash/*",
        element: <Dash />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProv>
      <RouterProvider router={router}/>
    </AuthProv>
  </React.StrictMode>,
)
