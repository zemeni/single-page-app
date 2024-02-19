import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Test from './components/Test.jsx'
import { createRoot } from "react-dom/client";
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App />
    },
    {
        path:"/test",
        element: <Test />
    }
])

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
