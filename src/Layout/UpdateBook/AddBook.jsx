
import Swal from "sweetalert2";
import axios from "axios";
const AddBook = () => {
   
    const handleAddBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const img = form.img.value;
        const books_name = form.books_name.value;
        const author_name = form.author_name.value;
        const category_name = form.category.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const addedDate = new Date();
       
        const addBook = { img, books_name, author_name, category_name, rating, quantity, description ,
         addedDate: addedDate.toISOString()}
        axios.post(`https://booksphere-3dfi.onrender.com/allbooks`, addBook)
            .then(res => {
                console.log(res.data)
                if(res.data.modifiedCount > 0){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Book added successfully',
                        showConfirmButton: true,
                        timer: 2500
                    })
                }
                    
                
            })
    }
    return (
        <div>
            <h2 className="text-center font-bold text-3xl text-cyan-700 py-4">Add Book</h2>
            <div className="my-4 mx-10" style={{backgroundImage: 'url(https://i.ibb.co/4V1YyYc/Screenshot-2024-01-22-014720.png)'} }>
        
        <form onSubmit={handleAddBook}>
           
            <div className="flex w-full px-4 justify-between gap-12">
                <div className="my-2 w-full">

                    <label className="label text-white" >Book Name</label>
                    <input type="text" name="books_name" placeholder="Type here" className="flex-1  input input-bordered input-info w-full " />
                </div>
                <div className="w-full my-2">

                    <label className="label text-white">Author Name</label>
                    <input type="text"  name="author_name" placeholder="Type here" className="flex-1  input input-bordered input-info w-full " />
                </div>


            </div>
            <div className="flex w-full px-4 gap-12 ">
                <div className="my-2 w-full">

                    <label className="label text-white" >Category</label>
                    <input type="text" name="category" placeholder="Type here" className="flex-1  input input-bordered input-info w-full " />
                </div>
                <div className="w-full my-2">

                    <label className="label text-white">Rating</label>
                    <input type="text" name="rating"  placeholder="Type here" className="flex-1  input input-bordered input-info w-full " />
                </div>


            </div>
            <div className="flex w-full px-4 gap-12">
                <div className="my-2 w-full">

                    <label className="label   text-white " >Quantity</label>
                    <input type="number" name="quantity"  placeholder="Type here" className="flex-1  input input-bordered input-info w-full " />
                </div>
                <div className="w-full my-2">
                    <div className="form-control">
                        <label className="label text-white">Short Description</label>
                        <input name="description"  className="textarea textarea-bordered h-24" placeholder="Bio"></input>

                    </div>
                </div>

               
            </div>
            <div className="flex w-full ">
                <div className="w-full lg:mx-14 md:mx-10">

                    <label className="label text-white" >Image</label>
                    <input type="url" name="image" placeholder="Type here" className="flex-1  input input-bordered input-info w-full " />
                </div>

            </div>
            <div className="lg:mx-14 md:mx-10 py-6">
              
               
                <input className="btn bg-cyan-700 text-white w-full mb-8 " type="submit" value="add Book" />
              
                </div>
            
        </form>
    </div>
        </div>
    );
};

export default AddBook;