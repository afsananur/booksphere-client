import axios from "axios";
import Swal from "sweetalert2";
import PropTypes from 'prop-types'
import { useEffect } from "react";
import Aos from "aos";

const Borrowed = ({borrowedBook,refetch}) => {
    const { currentDate, returnDate, book, _id } = borrowedBook
    const { img, books_name, category_name, quantity } = book
    const  bookQuantity  = {quantity}
    const action = 'return';
    const handleReturn = (id) => {

        Swal.fire({
            title: "Do you want to return the book?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0e7490",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Return it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://booksphere-server.onrender.com/borrowing/${id}`)
                .then((res)=>{
                    console.log(res.data)
                    Swal.fire({
                        title: "You have successfully returned the book",
                        text: "The book is returned",
                        icon: "success"
                      });
                refetch();

                })
             
            }
          });

          

          axios.patch(`https://booksphere-server.onrender.com/allbooks/${category_name}/${_id}/${action}`,bookQuantity)
          .then((res) => {
              console.log(res.data)
              refetch();
              
              
          })
    }
    useEffect(() => {
        Aos.init();
      }, [])

    return (
        <div className="card  card-compact w-96 bg-base-100 shadow-xl"  data-aos="fade-up">
        <figure><img src={img} className="w-72 rounded-lg pt-5" alt={img} /></figure>
        <div className="card-body">
            <h2 className="text-2xl font-bold text-cyan-700">{books_name}</h2>
            <p className='font-semibold text-lg'>{category_name}</p>
            <p className='font-bold text-xl'>Borrowed Date : {currentDate}</p>
            <p className='font-bold text-xl'>Return Date : {returnDate}</p>

            <div className="card-actions justify-start">

                <button onClick={() => handleReturn(_id)} className="btn bg-cyan-700 text-white px-7 my-4">Return</button>
            </div>
        </div>
    </div>
    );
};

Borrowed.propTypes = {
    borrowedBook: PropTypes.object,
    refetch: PropTypes.func
}

export default Borrowed;