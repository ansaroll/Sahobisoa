import { Suspense, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import useLogin from './hooks/useLogin'
import { AllRoutes } from '../pages/Routes'
import { Routes } from '../Routes'
import { useAppDispatch } from '../app/hooks'
import MainLoader from '../components/atom/MainLoader'


const Shell = () => {
    const { isLogged, currentUser } = useLogin();

    const location = useLocation()
    const currentPath = useMemo(() => location.pathname, [location])
    
    useEffect(() => {
        if (!isLogged() && loggedRoutes.includes(currentPath) && currentPath !== "/login") {
            window.location.href = "/login"
        }
    }, [currentPath, isLogged ])


    if (!isLogged() && loggedRoutes.includes(currentPath)) {
        return <></>
    }

    return (
        <>
            <Suspense fallback={<MainLoader />}>
                <Routes routes={AllRoutes} />
            </Suspense>
        </>
    )
}

export default Shell


const loggedRoutes = [
    "/myprofil",
    "/logout",
    "/survey/1",
]