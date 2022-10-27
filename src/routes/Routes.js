import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
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
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/')
            },
            {
                path: "/courses",
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/')
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
            },
            {
                path: "*",
                element: <Errorpage></Errorpage>
            }
        ]
    } 
]);