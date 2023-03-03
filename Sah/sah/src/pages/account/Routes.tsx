import { lazy } from 'react';

const Register = lazy(() => import('./SignUp'));
const Login = lazy(() => import('./Login'));

export const AccountRoutes = [
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />
    }
]