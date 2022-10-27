import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Courses from "../components/Courses";
import Errorpage from "../components/Errorpage";
import Login from "../components/Login";
import Main from "../outlet/Main";


export const routes = createBrowserRouter([
        {
        path: "/",
        element: <Main></Main>,
        children: [
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