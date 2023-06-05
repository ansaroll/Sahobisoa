import { useCallback, useMemo } from "react";
import { auth } from "../../firebase";
import { useLocation } from "react-router";

// function to verify if the user is connected or not in real time on Firebase
const useLogin = () => {

    const isLogged = useCallback(() => {
        // TODO: verify if the user is connected or not in real time on Firebase
        return Boolean(auth.currentUser)
    }, [])

    const currentUser = useCallback(() => {
        return auth.currentUser
    }, [])
    return { isLogged , currentUser }
}

export default useLogin