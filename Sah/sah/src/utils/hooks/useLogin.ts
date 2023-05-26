import { useCallback, useMemo } from "react";
import { auth } from "../../firebase";
import { useLocation } from "react-router";

// function to verify if the user is connected or not in real time on Firebase
const useLogin = () => {

    const location = useLocation()
    const isLogged = useCallback(() => {
        // TODO: verify if the user is connected or not in real time on Firebase
        return Boolean(auth.currentUser)
    }, [auth.currentUser])

    const currentUser = useMemo(() => {
        // TODO: return the current user
        return auth.currentUser
    }, [auth, location])

    return { isLogged , currentUser }
}

export default useLogin