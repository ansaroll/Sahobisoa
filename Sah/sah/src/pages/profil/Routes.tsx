import { lazy } from 'react';

const Profil = lazy(() => import('./Profil'));

export const ProfilRoutes = [
    {
        path: '/profil',
        element: <Profil />
    },
    {
        path: '/myprofil',
        element: <Profil />
    }
]