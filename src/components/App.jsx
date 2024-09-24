import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "./Home"
import Navigator from "./Navigator";
import About from "./About";
import Chat from "./chat";
import Projects from "./Projects";

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
                    path: 'projects',
                    element: <Projects />
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