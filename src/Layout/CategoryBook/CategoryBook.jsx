import { useParams } from "react-router-dom";
import useCategoryBooks from "../Hook/useCategoryBooks";
import Books from "./Books";


const CategoryBook = () => {
    const {categoryName} = useParams()

    const {data,isLoading,refetch} = useCategoryBooks(categoryName)
    if(isLoading){
        return <h1>Loading</h1>
    }
    return (
       <div>
         <h2 className="text-center font-bold text-3xl text-cyan-700 py-6">{categoryName}</h2>
         <div className="grid lg:grid-cols-3 gap-4 py-6">
            
            {
                data?.map(book=> <Books refetch={refetch} key={book._id} book={book}></Books>)
            }
        </div>
       </div>
    );
};

export default CategoryBook;