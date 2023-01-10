import { useRoutes, RouteObject } from "react-router";

export const Routes = ({ routes }: { routes: SahRouteProps[] }) => useRoutes(routes)

export type SahRouteProps = RouteObject & {
    children?: SahRouteProps[],
    disableScrollTopOnChange?: boolean
}
