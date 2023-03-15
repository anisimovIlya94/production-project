import { getUserAuthData } from "entities/User/model/selectors/getUserAuthData/getUserAuthData";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RoutesPath } from "shared/config/routerConfig/routerConfig";

export function RequireAuth({ children }: { children: JSX.Element }) {
    let auth = useSelector(getUserAuthData)
    let location = useLocation();
  
    if (!auth) {
        return <Navigate to={RoutesPath.main} state={{ from: location }} replace />;
    }
  
    return children;
  }