import { createBrowserRouter, Link } from "react-router";
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
    hydrateFallbackElement: <div className='w-11/12 p-40 m-auto items-center flex justify-center'><span className="loading bg-blue-900 loading-bars loading-xl"></span></div>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader : ()=> fetch ('https://hero-home-neon.vercel.app/home')
      },
      {
        path: '/home',
        element: <Home></Home>,
        loader : ()=> fetch ('https://hero-home-neon.vercel.app/home')
      },
      {
        path: '/service',
        element: <Service></Service>,
        loader: ()=>fetch('https://hero-home-neon.vercel.app/Service')
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
        loader: ({params})=> fetch(`https://hero-home-neon.vercel.app/Service/${params.id}`)
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
      },
     
    ]
  },
  {
    path: '/*',
    element: <div className="w-11/12 flex-col mx-auto items-center flex justify-center pt-40">
     <h1 className="text-3xl"> 404 not found</h1>
     <Link className="btn mt-3 text-lg bg-green-400 text-white font-medium rounded-2xl" to='/home'>Go to Home</Link>
      </div>
  }
])

export default router;