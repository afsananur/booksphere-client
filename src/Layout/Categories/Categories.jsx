import { useEffect, useState } from "react";
import Category from "./Category";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Categories = () => {
    const [categories, setCategories]= useState([]);

    useEffect(()=> {
        fetch('http://localhost:3000/categories')
        .then(res=> res.json())
        .then(data => setCategories(data))
    },[])

    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="px-8 "  data-aos="fade-up">
            <div className="text-center">
                <h2 className="text-5xl font-bold pt-10 pb-6 text-cyan-600">Our Categories</h2>
                <p>Empowering Public Libraries with Digital Technology to <br /> Expand Their Reach and Impact</p>
                </div>

                <div className="grid py-6 md:grid-cols-4 gap-4">
                    {categories.map(category => <Category key={category._id} category={category}></Category>)}
                </div>
        </div>
    );
};

export default Categories;