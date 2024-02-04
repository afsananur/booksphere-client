import { useQuery } from "@tanstack/react-query";


const useBookDetails = ({ category, id }) => {
    const url = `https://booksphere-3dfi.onrender.com/allbooks/${category}/${id}`;

    const { data, isLoading, isFetched, refetch} = useQuery({
        queryKey: ['Books', category, id], // Include category and id in the query key
        queryFn: async () => {
            const response = await fetch(url);
            return response.json()
            
  }  });
  console.log(data)
  return { data, isLoading, isFetched, refetch };
};

export default useBookDetails;