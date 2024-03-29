import { useCallback } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useQuery } from "@tanstack/react-query";

const useFreelance = (id: string) => {
    const colRef = collection(db, "utilisateurs");

    const queryFreelances = useQuery<Array<any>>(["utilisateurs", id], useCallback(async () => {
        const docsSnapshot = await getDocs(colRef)
        if (!docsSnapshot.empty) {
            return docsSnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });

        } else {
                throw new Error("No such document!");
        }
    }, [colRef]));

    return { queryFreelances };
};

export default useFreelance;
