import useBorrowed from "../Hook/useBorrowed";
import Borrowed from "./Borrowed";

const BorrowedBooks = () => {
    const {data,isLoading,refetch} = useBorrowed()
if(isLoading){
    return <h1>loading</h1>
}

    return (
        <div>
            <h2 className="text-4xl font-bold text-center text-cyan-700 my-4">Your total Borrowed Books: {data?.length}</h2>
            <div className="grid justify-center lg:grid-cols-3 md:grid-cols-2 m-6  gap-4">
                {
                    data?.map((borrowedBook, id) => <Borrowed key={id} refetch={refetch} borrowedBook={borrowedBook}></Borrowed>)
                }
            </div>
        </div>
    );
};

export default BorrowedBooks;