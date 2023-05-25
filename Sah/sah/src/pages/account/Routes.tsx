import { lazy } from 'react';

const Register = lazy(() => import('./SignUp'));
const Login = lazy(() => import('./Login'));
const Logout = lazy(() => import('./Logout'));

export const AccountRoutes = [
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/logout',
        element: <Logout />
    }
]