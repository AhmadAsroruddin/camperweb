import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Auth/Register/Register";
import Login from "../pages/Auth/Login/Login";
import Confirmation from "../pages/Auth/Confirmation/Confirmation";
import HomeLogin from "../pages/Home/Home"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/confirmation",
    element: <Confirmation />,
  },
  {
    path: "/home",
    element: <HomeLogin />,
  },
 
  

  
]);

export default router;
