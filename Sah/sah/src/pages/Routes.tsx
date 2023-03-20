import { Survey } from "./survey/Survey";
import { Freelances } from "./freelances/Freelances";
import { MainLayout } from "../components/MainLayout";
import Error404 from "../components/Error404";
import Home from "./home/Home";
import Results from "./results";
import { AccountRoutes } from "./account/Routes";
import { ProfilRoutes } from "./profil/Routes";
import { SettingsRoutes } from "./settings/Routes";

export const AllRoutes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/survey/:id",
                element: <Survey />,
            },
            {
                path: "/results",
                element: <Results />,
            },
            {
                path: "/freelances",
                element: <Freelances />,
            },
            ...AccountRoutes,
            ...ProfilRoutes,
            ...SettingsRoutes
        ],
    },
    {
        path: "*",
        element: <Error404/>
    }
]