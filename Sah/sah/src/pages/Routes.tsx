import Home from "./Home";
import { Survey } from "./Survey";
import { Results } from "./Results";
import { Freelances } from "./Freelances";
import { MainLayout } from "../components/MainLayout";
import Error404 from "../components/Error404";

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
        ],
    },
    {
        path: "*",
        element: <Error404/>
    }
]