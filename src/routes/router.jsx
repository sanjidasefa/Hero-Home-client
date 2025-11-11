import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Service from "../pages/Service";
import AddService from "../pages/privatePages/AddService";
import Login from "../auth/AuthPages/Login";
import Register from '../auth/AuthPages/Register'
import Details from "../component/childComponent/Details";
import Update from "../component/childComponent/Update"
import MyProfile from "../pages/privatePages/MyProfile";
import MyBooking from "../pages/privatePages/MyBooking";
import PrivateRoute from "./PrivateRoute";
import MyService from "../pages/privatePages/MyService";
const router = createBrowserRouter([
  {
    path : '/', 
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement: <div>loading...</div>,
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
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path: '/Service-Details/:id',
        element: <Details></Details>
      },
      {
        path: '/update-route/:id',
        element: <Update></Update>,
        loader: ({params})=> fetch(`http://localhost:3000/Service/${params.id}`)
      },
      {
        path: '/my-profile',
        element : <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      },
      {
        path: '/Service-Booking',
        element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>
      },
      {
        path: '/My-service',
        element: <PrivateRoute><MyService></MyService></PrivateRoute>
      },
       {
        path: '/Login',
        element : <Login></Login>
      },
      {
        path: '/resister',
        element: <Register></Register>
      }
    ]
  },
  {
    path: '/*',
    element: <div className="w-11/12 mx-auto items-center flex justify-center ">404 not found</div>
  }
])

export default router;