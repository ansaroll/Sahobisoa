import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useCallback } from 'react'
import { auth, db } from '../../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { TSignUpForm } from '../SignUp';

const useSignUp = () => {

    const handleSaveNewUser = async (user: any) => {
        try {
            const docRef = await addDoc(collection(db, "users"), user);
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    const handleSignUpWithEmail = useCallback((user: TSignUpForm) => {
        createUserWithEmailAndPassword(auth, user.email!, user?.password!)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("Inscription réussie", user);
                handleSaveNewUser(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log({ errorCode, errorMessage });

            });
    }, [])

    return { handleSignUpWithEmail }
}

export default useSignUp