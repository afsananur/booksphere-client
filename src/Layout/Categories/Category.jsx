import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const Category = ({category}) => {
    const {category_name, image } = category;
    return (
        <div>
           
            <div className="card w-64 bg-base-100 shadow-xl image-full ">
                  <figure><img src={image} alt="Shoes" /></figure>
               <div className="card-body items-center text-center">
                  <h2 className="pt-20 font-bold ">{category_name}</h2>
                 
                   <div className="card-actions ">
                   <Link to ={`/categories/${category.category_name}`}>   <button className="btn text-white bg-cyan-600 ">See Books</button></Link>
    </div>
  </div>
                  </div>
        </div>
    );
};

Category.propTypes ={
    category: PropTypes.object
}

export default Category;