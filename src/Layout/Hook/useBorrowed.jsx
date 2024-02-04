import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useBorrowed = () => {
    const { user} = useContext(AuthContext)
    console.log(user)
    
        const { data, isLoading ,isFetched,refetch} = useQuery({
            queryKey: ['borrowedBooks'],
            queryFn: async () => {
                const data = await fetch(`https://booksphere-3dfi.onrender.com/borrowing?email=${user?.email}`, )
                return await data.json()
            },
        });
        return {data,isLoading,isFetched,refetch}
        
};

export default useBorrowed;