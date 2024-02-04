import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";



const Blog = () => {

    useEffect(() => {
        Aos.init();
      }, [])
    return (
       <div>
        <h1 className="font-bold lg:text-5xl text-2xl text-center pt-8 text-cyan-700" >Latest Updates</h1>
        <p className="text-center py-4">Recent from the blog</p>
         <div className="flex md:flex-row flex-col gap-6 p-6">
            <div className="md:pl-8">


            <div className="card card-compact lg:w-96 w-90  bg-base-100 shadow-lg mb-4 flex flex-row "  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">

  <figure><img src="https://i.ibb.co/SczRHcM/books.jpg" alt="books" className="pl-3 w-96" /></figure>
  <div className="p-4">
    <h2 className="text-xl font-bold pb-3">9 Benefits of Reading Books: Enhance Your Life Daily</h2>
    <p>By acmeestaff on April 9,20244</p>
    
  </div>
</div>

<div className="card card-compact lg:w-96 w-90  bg-base-100 shadow-lg mb-4 flex flex-row"data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
  <figure><img src="https://i.ibb.co/rF1c0cr/camera.jpg" alt="books" className="pl-3 w-96" /></figure>
  <div className="p-4">
    <h2 className="text-xl font-bold pb-4">Photography Tips and Tricks for Beginners</h2>
    <p>By acmeestaff on June  9, 2024</p>
    
  </div>
</div>


            </div>
            <div className=" flex flex-row bg-base-100 shadow-xl ">
  <figure><img className="h-full" src="https://i.ibb.co/GsYrWV6/Untitled-1.jpg" alt="Shoes" /></figure>
  <div className="pt-20 px-6">
    <h2 className="text-2xl font-bold">
       
Top 10 Books: How to Cook for Beginners </h2>
<div className="divider"></div>
    <p>By acmeestaff on March 9, 2021</p>
    
  </div>
</div>
        </div>
       </div>
    );
};

export default Blog;