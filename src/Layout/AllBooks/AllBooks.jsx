import { useEffect, useState } from "react";
import AllBooksCard from "./AllBooksCard";
import Aos from "aos";

const AllBooks = () => {
    const [allBooks, setAllBooks]= useState([]);

    useEffect(()=> {
        fetch('https://booksphere-server.onrender.com/allbooks')
        .then(res=> res.json())
        .then(data => setAllBooks(data))
    },[])

    useEffect(() => {
        Aos.init();
      }, [])
    return (
        <div>
            <h2 className="lg:text-5xl text-2xl text-center font-semibold py-4 text-cyan-700" data-aos="fade-up">All Books</h2>
            
             <div className="grid justify-center lg:grid-cols-4 md:grid-cols-3 gap-4 py-6" >
                    {allBooks.map(allbookscard => <AllBooksCard key={allbookscard._id} allbookscard={allbookscard}></AllBooksCard>)}
                </div>
        </div>
    );
};

export default AllBooks;