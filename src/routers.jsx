import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import ExampleOne from "./pages/ExamplePageOne.jsx";
import ExampleTwo from "./pages/ExamplePageTwo.jsx";
import ExampleThree from "./pages/ExamplePageThree.jsx";

const routers = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/one/:name",
                element: <ExampleOne/>
            },
            {
                path: "/two",
                element: <ExampleTwo/>
            },
            {
                path: "/three",
                element: <ExampleThree/>
            }
        ]
    }
]
const BrowserRouter = createBrowserRouter(routers);
export default BrowserRouter;