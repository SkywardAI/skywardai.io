import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "./Home"
import Navigator from "./Navigator";
import About from "./About";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navigator />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/about',
                    element: <About />
                }
            ]
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}

export default App;