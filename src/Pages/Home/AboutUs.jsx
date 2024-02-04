import Aos from "aos";
import { useEffect } from "react";


const AboutUs = () => {

  useEffect(() => {
    Aos.init();
  }, [])
    return (
        <div>
        <div className="hero px-10 py-6" data-aos="fade-up-right">
  <div className="hero-content flex-col lg:flex-row-reverse  ">
    <img src="https://i.ibb.co/MshQXS7/Screenshot-2024-01-22-020617.png" className="h-80 rounded-lg " />
    <div className="pl-10">
      <h1 className="lg:text-5xl text-2xl text-cyan-700 font-bold">About Us</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      
    </div>
  </div> 
</div>    
        </div>
    );
};

export default AboutUs;