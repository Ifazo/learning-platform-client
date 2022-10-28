import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import CardDetails from '../components/CardDetails';
import Courses from "../components/Courses";
import Checkout from "../components/Checkout";             
import Errorpage from "../components/Errorpage";
import Home from '../components/Home';
import Login from "../components/Login";
import Register from '../components/Register';
import Main from "../outlet/Main";
import PrivateRoutes from './PrivateRoutes';


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://b610-lerning-platform-server-side-ifazo.vercel.app/')
            },
            {
                path: "/courses",
                element: <Courses></Courses>,
                loader: () => fetch('https://b610-lerning-platform-server-side-ifazo.vercel.app/')
            },
            {
                path: "/courses/:id",
                element: <PrivateRoutes><CardDetails></CardDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-ifazo.vercel.app/courses/${params.id}`)
            },
            {
                path: "/courses/:id",
                element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-ifazo.vercel.app/pay/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            }
        ]
    }
]);