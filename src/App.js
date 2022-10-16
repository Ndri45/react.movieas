import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Bookmark from "./pages/Bookmark";
import Bought from "./pages/Bought";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/bookmark", element: <Bookmark /> },
    { path: "/bought", element: <Bought /> },
    { path: "/checkout", element: <Checkout /> },
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
