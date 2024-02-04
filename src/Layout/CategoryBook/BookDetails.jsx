import { useContext } from "react";
import { useParams } from "react-router-dom";
import {AuthContext} from "../AuthProvider/AuthProvider"
import useBookDetails from "../Hook/useBookDetails";
import Swal from 'sweetalert2'
import axios from "axios";

const BookDetails = () => {
    const { user } = useContext(AuthContext)
    const {category,id} = useParams()
    const {data,isLoading, refetch} = useBookDetails({category,id})
    if(isLoading){
        return <h1>loading</h1>
    }
    const book = data
    const { img,books_name, author_name, category_name ,quantity, description} = data;

    const action = 'borrow'
    const handleBorrow = (e) => {
        e.preventDefault()
        const date = e.target.date.value;
        const returnDate = new Date(date).toDateString()
        const currentDate = new Date().toDateString()
        const name = user.displayName;
        const email = user.email;
        const borrower = { name, email, returnDate, currentDate, book }
        const bookQuantity = { quantity }
        console.log(borrower);
         
        // fetch('http://localhost:3000/borrowing',{
        //     method: 'POST',
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body:JSON.stringify(borrower)
        // })
        axios.post('https://booksphere-server.onrender.com/borrowing', borrower)
        
            .then(() => {
                console.log(data);
                
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully borrowed the Book',
                    showConfirmButton: true,
                    timer: 2500
                })
            })
        axios.patch(`https://booksphere-server.onrender.com/allbooks/${category}/${id}/${action}`, bookQuantity)
            .then((res) => {
                console.log(res.data)
                refetch()
                
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
    
      <h1 className="text-4xl text-cyan-700 font-bold py-3 ">{books_name}</h1>
      <h2 className="text-2xl font-semibold">{author_name}</h2>
      <p className="py-2">{category_name}</p>
      <h4 className="font-semibold text-xl pb-4">Quantity: {quantity}</h4>
      <p><span className="text-lg font-bold"> Description:</span><br />
        {description}</p>
      <div className="card-actions  items-end flex justify-between">
                   
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className={quantity > 0 ? "btn bg-cyan-700 text-white my-6" : 'btn btn-disabled'} onClick={ () => document.getElementById('my_modal_5').showModal()}>Borrow Book</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">

                            <form onSubmit={handleBorrow}>
                                <label className="label text-lg font-bold">Date of Return:</label>
                                <input type="date" name="date" id="" />
                                <br />
                                <input type="submit" value='borrow Now' className="btn bg-cyan-700 btn-sm text-white  my-4" name="" id="" />
                            </form>
                            <div className="modal-action">

                                <form method="dialog">
                                   
                                    <button className="btn bg-cyan-700 text-white">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetails;