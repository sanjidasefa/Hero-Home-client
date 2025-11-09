import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Service from "../pages/Service";
import AddService from "../pages/privatePages/AddService";
import Login from "../auth/AuthPages/Login";
import Register from '../auth/AuthPages/Register'

const router = createBrowserRouter([
  {
    path : '/', 
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
       
      },
      {
        path: '/home',
        element: <Home></Home>,
        loader : ()=> fetch ('http://localhost:3000/home')
      },
      {
        path: '/service',
        element: <Service></Service>,
        loader: ()=>fetch('http://localhost:3000/Service')
      },
      {
        path: '/Add-Service',
        element: <AddService></AddService>
      }
    ]
  },
  {
    path:'/auth',
    children: [
      {
        path: 'login',
        element : <Login></Login>
      },
      {
        path: 'resister',
        element: <Register></Register>
      }
    ]
  }
])

export default router;