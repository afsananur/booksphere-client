import Aos from 'aos';
import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllBooksCard = ({allbookscard}) => {
    const{_id,img ,books_name ,category_name, author_name, rating} = allbookscard;

    useEffect(() => {
      Aos.init();
    }, [])
    return (
        <div data-aos="fade-up">
         
            <div className="card w-72 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="text-cyan-600 font-bold">{category_name}</h2>
    <h2 className="card-title font-bold">{books_name}</h2>
    <p>{author_name}</p>
    <p className="font-semibold">Rating: {rating}</p>
    <div className="card-actions">
    <Link className="btn bg-cyan-700 text-white" to={`/update/${category_name}/${_id}`}>Update Book</Link>
    </div>
  </div>
</div>
        </div>
    );
};
AllBooksCard.propTypes = {
  allbookscard: PropTypes.object
}

export default AllBooksCard;