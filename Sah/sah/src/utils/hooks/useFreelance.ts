import { useCallback } from "react";
import { db } from "../../firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useQuery } from "@tanstack/react-query";

const useFreelance = (id: string) => {
    const colRef = collection(db, "utilisateurs");

    const getFreelance = useCallback(async () => {
        const docsSnapshot = await getDocs(colRef)
        if (!docsSnapshot.empty) {
            return docsSnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });

        } else {
            throw new Error("No such document!");
        }
    }, [colRef]);

    const queryResult = useQuery<Array<any>>(["utilisateurs", id], getFreelance);

    return { queryResult };
};

export default useFreelance;
