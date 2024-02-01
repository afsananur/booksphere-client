import { useEffect, useState } from "react";
import AllBooksCard from "./AllBooksCard";
import Aos from "aos";

const AllBooks = () => {
    const [allBooks, setAllBooks]= useState([]);

    useEffect(()=> {
        fetch('http://localhost:3000/allbooks')
        .then(res=> res.json())
        .then(data => setAllBooks(data))
    },[])

    useEffect(() => {
        Aos.init();
      }, [])
    return (
        <div>
            <h2 className="text-5xl text-center font-semibold py-4 text-cyan-700" data-aos="fade-up">All Books</h2>
            
             <div className="grid justify-center md:grid-cols-4 gap-4 py-6" >
                    {allBooks.map(allbookscard => <AllBooksCard key={allbookscard._id} allbookscard={allbookscard}></AllBooksCard>)}
                </div>
        </div>
    );
};

export default AllBooks;