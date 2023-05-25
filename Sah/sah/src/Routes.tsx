import { useRoutes, RouteObject } from "react-router";
import { auth } from "./firebase";
import { Navigate, Route } from "react-router-dom";
import Login from "./pages/account/Login";
import { AllRoutes } from "./pages/Routes";
import { useEffect } from "react";

export const Routes = ({ routes }: { routes: SahRouteProps[] }) => useRoutes(routes)

export type SahRouteProps = RouteObject & {
    children?: SahRouteProps[],
    disableScrollTopOnChange?: boolean,
    isPrivate?: boolean,
}

const PrivateRoute = ({ path, element }: SahRouteProps) => {
    const user = auth.currentUser;

    if (!user) {
        return Navigate({ to: '/login' })
    }

    return <Route path={path} element={element} />;
};

const AppRoutes = () => {

    // take all routes even nested routes and add private route to them
    const addPrivateRoute = (routes: SahRouteProps[]): SahRouteProps[] => {
        return routes.map(route => {
            if (route.children) {
                return { ...route, children: addPrivateRoute(route.children) }
            }
            return route.isPrivate ? { ...route, element: <PrivateRoute {...route} /> } : route
        })
    }

    const routes: SahRouteProps[] = addPrivateRoute(AllRoutes)
    return <Routes routes={routes.map(route => route.isPrivate ? { ...route, element: <PrivateRoute {...route} /> } : route)} />;
};

export default AppRoutes;


// const PrivateRoute = ({ path, element, isLoggedRoute }: SahRouteProps) => {
//     const user = auth.currentUser;
//     // is !user redirect to login
//     if (isLoggedRoute && !user) {
//         return <Route path={'/login'} element={<Login/>} />;
//     }
//     return <Route path={path} element={element} />;
// }; 