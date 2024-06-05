import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Auth/Register/Register";
import Login from "../pages/Auth/Login/Login";
import Confirmation from "../pages/Auth/Confirmation/Confirmation";



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

 
  

  
]);

export default router;
