import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import CardDetails from '../components/CardDetails';
import Courses from "../components/Courses";
import Errorpage from "../components/Errorpage";
import Home from '../components/Home';
import Login from "../components/Login";
import Register from '../components/Register';
import Main from "../outlet/Main";


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
                element: <CardDetails></CardDetails>,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-ifazo.vercel.app/courses/${params.id}`)
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