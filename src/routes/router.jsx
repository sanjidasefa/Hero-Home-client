import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Service from "../pages/Service";
import AddService from "../pages/privatePages/AddService";
import Login from "../auth/AuthPages/Login";
import Register from '../auth/AuthPages/Register'
import Details from "../component/childComponent/Details";
import Update from "../component/childComponent/Update"
const router = createBrowserRouter([
  {
    path : '/', 
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader : ()=> fetch ('http://localhost:3000/home')
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
      },
      {
        path: '/Service-Details/:id',
        element: <Details></Details>
      },
      {
        path: '/update-route/:id',
        element: <Update></Update>,
        loader: ({params})=> fetch(`http://localhost:3000/Service/${params.id}`)
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
  },
  // {
  //   path: '/*',
  //   element: 
  // }
])

export default router;