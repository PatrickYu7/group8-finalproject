import { Outlet } from "react-router-dom";
import Home from "./pages/home/Home";

const useAuth = (props) => {
  if (localStorage.getItem("username")) {
    return true;
  }
  return false;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Home />;
};

export default ProtectedRoutes;
