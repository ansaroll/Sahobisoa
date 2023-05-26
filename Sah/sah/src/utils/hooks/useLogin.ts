import { useCallback } from "react";
import { auth } from "../../firebase";

// function to verify if the user is connected or not in real time on Firebase

const useLogin = () => {
    const isLogged = useCallback(() => {
        // TODO: verify if the user is connected or not in real time on Firebase
        return Boolean(auth.currentUser)
    }, [auth.currentUser])
    return { isLogged }
}

export default useLogin