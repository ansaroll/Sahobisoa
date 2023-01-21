import { Survey } from "./survey/Survey";
import { Freelances } from "./freelances/Freelances";
import { MainLayout } from "../components/MainLayout";
import Error404 from "../components/Error404";
import Home from "./home/Home";
import { Profil } from "./profil/Profil";
import Results from "./results";

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