import { useCallback } from "react";
import { useAppDispatch } from "../../app/hooks";
import { signInWithPopup  } from "firebase/auth"
import { updateUser } from "../../features/user/userReducer";
import { auth, db, providerAutGoogle } from '../../firebase'
import { useQuery } from "@tanstack/react-query";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";


// function to verify if the user is connected or not in real time on Firebase
const useLogin = () => {

    const dispatch = useAppDispatch()

    const currentUser = useCallback(() => {
        return auth.currentUser
    }, [])

    const isLogged = useCallback(() => {
        // TODO: verify if the user is connected or not in real time on Firebase
        return Boolean(auth.currentUser) && Boolean(currentUser())
    }, [])

    const signIn = useCallback(() => {
        signInWithPopup(auth, providerAutGoogle)
            .then((result) => {
                dispatch(updateUser({
                    avatarUrl:result.user.photoURL ?? '',
                    email:result.user.email ?? '',
                    lastName:result.user.displayName ?? ''
                }))
            })
            .catch((error) => {
                throw new Error(error);                
            })
    }, [])



    return { isLogged, currentUser, signIn }
}

export default useLogin