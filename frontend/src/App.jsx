import { useSelector } from "react-redux";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import { selectLogin } from "./pages/Auth/Login/slice/loginSlice";
import Login from "./pages/Auth/Login/Login";

function App() {
  const user = useSelector(selectLogin);
  return <>{user ? <Dashboard /> : <Login />}</>;
}

export default App;
