import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Bookmark from "./pages/Bookmark";
import Bought from "./pages/Bought";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/:movieId", element: <Detail /> },
    { path: "/bookmark", element: <Bookmark /> },
    { path: "/bought", element: <Bought /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
