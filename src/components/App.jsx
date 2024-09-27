import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "./home"
import Navigator from "./Navigator";
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