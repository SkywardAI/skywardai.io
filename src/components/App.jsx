import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "./Home"
import Navigator from "./Navigator";
import About from "./About";
import Chat from "./chat";

function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Navigator />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: 'about',
                    element: <About />
                },
                {
                    path: 'chat',
                    element: <Chat />
                }
            ]
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}

export default App;