import { useCallback } from "react";
import { auth } from "../../firebase";

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