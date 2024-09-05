import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "./Home"
import Navigator from "./Navigator";
import About from "./About";

import { genURL } from "../utils";

function App() {

    const router = createBrowserRouter([
        {
            path: import.meta.env.VITE_BASE_ROUTE,
            element: <Navigator />,
            children: [
                {
                    path: genURL(),
                    element: <Home />
                },
                {
                    path: genURL('about'),
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