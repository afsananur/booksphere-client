import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { useEffect } from "react";
import Aos from "aos";

const Books = ({ book }) => {
    const { _id ,books_name, category_name,rating,author_name,img} = book || {};

    useEffect(() => {
      Aos.init();
    }, [])
    return (
        <div>
          
         
            <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-up">
  <figure className="px-10 pt-10">
    <img src={img} className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="text-cyan-700 font-bold">{category_name}</h2>
    <h2 className="card-title font-bold">{books_name}</h2>
    <p>{author_name}</p>
    <p className="font-semibold">Rating: {rating}</p>
    <div className="card-actions">
    <Link to={`/categories/${category_name}/${_id}`} className="btn bg-cyan-700 text-white  ">See details</Link>
    </div>
  </div>
</div>
            </div>
        
    );
};
Books.propTypes = {
    book: PropTypes.object
}

export default Books;