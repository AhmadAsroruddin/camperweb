import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Auth/Register/Register";
import Login from "../pages/Auth/Login/Login";
import Confirmation from "../pages/Auth/Confirmation/Confirmation";
import HomeLogin from "../pages/Home/Home";
import TravelList from "../pages/Campervan/Components/CampervanList";
import Travels from "../pages/Campervan/Travels";
import TravelDetail from "../pages/Campervan/Components/CampervanDetail";
import CampervanForm from "../pages/Campervan/Components/CampervanForm"

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
  {
    path: "/travels",
    element: <Travels />,
  },
  {
    path: "/travels/:travelId", 
    element: <TravelDetail />,
  },
  {
    path: "/create-camper",
    element: <CampervanForm/>
  }
  

  
]);

export default router;
