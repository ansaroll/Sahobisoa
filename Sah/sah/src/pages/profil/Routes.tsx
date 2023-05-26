import { lazy } from 'react';

const Profil = lazy(() => import('./Profil'));

export const ProfilRoutes = [
    {
        path: '/profil',
        element: <Profil />,
        isPrivate: true
    },
    {
        path: '/myprofil',
        element: <Profil />,
        isPrivate: true
    }
]