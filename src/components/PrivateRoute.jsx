import { Navigate, Outlet } from "react-router-dom";
import useAuthStatus from "../hooks/useAuthStatus";
import Loader from "./Loader";

const PrivateRoute = () => {
  const { authenticated, loading } = useAuthStatus();
  if (loading) {
    return <Loader />;
  }
  return authenticated ? <Outlet /> : <Navigate to='/funkcamp/sign-in' />;
};

export default PrivateRoute;
