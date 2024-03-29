import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useMemo } from 'react'
import { auth, db } from '../../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { TSignUpForm } from '../SignUp';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { omit } from 'lodash';

const useSignUp = () => {

    const [error, setError] = React.useState<string | null>(null);
    React.useEffect(() => {
        if (error) { toast.error(error); setError(null); }
    }, [error])

    const [message, setMessage] = React.useState<string | null>(null);
    React.useEffect(() => {
        if (message) { toast.success(message); setMessage(null); }
    }, [message])

    const saveUserMutation = useMutation((user: TSignUpForm) => addDoc(collection(db, "utilisateurs"), omit(user,["password" , "passwordConfirm"])), {
        onSuccess: (docRef, user) => {
            setMessage("Inscription réussie : " + user.lastName + " " + user.firstName + " " + user.email) 
            window.location.href = "/myprofil"
        },
        onError: (error:any) => {
            setError("Mutation échouée" + error.toString())
            console.log("Mutation échouée", error);
        }
    })

    const handleSignUpWithEmailMutation = useMutation((user: TSignUpForm) => 
        createUserWithEmailAndPassword(auth, user.email!, user?.password!), {
            onSuccess: (userCredential , user) => {
                // Signed in 
                const userInstance = userCredential.user;
                saveUserMutation.mutateAsync(user)
            },
            onError : (error:any) => {
                setError("Erreur lors de la création du compte" + error.message)
                console.log("Erreur lors de la création du compte", error);
            }
        })
    
    return { handleSignUpWithEmailMutation, error , isLoading: saveUserMutation.isLoading || handleSignUpWithEmailMutation.isLoading }
}

export default useSignUp