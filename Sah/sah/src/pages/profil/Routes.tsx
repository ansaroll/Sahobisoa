import { lazy } from 'react';

const Register = lazy(() => import('./Profil'));

export const ProfilRoutes = [
    {
        path: '/profil',
        element: <Register />
    }
]