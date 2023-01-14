import { Survey } from "./Survey";
import { Results } from "./Results";
import { Freelances } from "./freelances/Freelances";
import { MainLayout } from "../components/MainLayout";
import Error404 from "../components/Error404";
import Home from "./home/Home";
import { Profil } from "./profil/Profil";

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
                path: "/result",
                element: <Results />,
            },
            {
                path: "/freelances",
                element: <Freelances />,
            },
            {
                path: "/profil",
                element: <Profil />,
            },
        ],
    },
    {
        path: "*",
        element: <Error404/>
    }
]