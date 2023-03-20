import { lazy } from 'react';

const Settings = lazy(() => import('./Settings'));

export const SettingsRoutes = [
    {
        path: '/settings',
        element: <Settings />
    }
]