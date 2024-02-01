import img1 from '../../assets/Image/2.jpg'
import img2 from '../../assets/Image/1.jpg'
import img3 from '../../assets/Image/3.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full relative ">
        <div id="item1" className="carousel-item w-full relative ">
          <img src={img1} className="w-full"
          />
  
          <div className="absolute flex justify-between px-10 
           w-full items-center bg-[#0000007A] h-full text-white">
          <div className="md:space-y-4  text-white p-2"  data-aos="fade-right"
     
    >
                    <h4 className="text-cyan-600 md:text-3xl text-lg font-bold">Online Book Club</h4>
                    <h2 className="font-bold  text-xl
                    lg:text-5xl">The mordern way to find your Learning  <br />path at Book<span className="text-cyan-600">Sphere</span> <br />
                     </h2> 

                  </div>
                  <div className=" flex flex-col gap-2">
                    <a href="#item1" className="btn btn-xs rounded-full bg-[#0000002A] border-black text-gray-300 hover:bg-black hover:text-white hover:border-white">
                      1
                    </a>
                    <a href="#item2" className="btn btn-xs rounded-full bg-[#0000002A] border-black text-gray-300 hover:bg-black hover:text-white hover:border-white">
                      2
                    </a>
                    <a href="#item3" className="btn btn-xs rounded-full bg-[#0000002A] border-black text-gray-300 hover:bg-black hover:text-white hover:border-white">
                      3
                    </a>
                  </div>
            </div>
  
        </div>
        <div id="item2" className="carousel-item w-full relative">
          <img src={img2}

            className="w-full"
          />
          <div className="absolute flex justify-between px-10  w-full items-center bg-[#0000007A] h-full text-white">
          <div className="md:space-y-4  text-white  p-2" data-aos="fade-right">
                    <h4 className="text-cyan-600 md:text-3xl text-lg font-bold">Know the magical power of books</h4>
                    <p className="font-bold text-xl lg:text-6xl">Let's change the world through <br /> Books in Book<span className='text-cyan-600'>Sphere</span>     </p>                    
                  </div>
                  <div className=" flex flex-col gap-2">
                    <a href="#item1" className="btn btn-xs rounded-full bg-[#0000002A] border-black text-gray-300 hover:bg-black hover:text-white hover:border-white">
                      1
                    </a>
                    <a href="#item2" className="btn btn-xs rounded-full bg-[#0000002A] border-black text-gray-300 hover:bg-black hover:text-white hover:border-white">
                      2
                    </a>
                    <a href="#item3" className="btn btn-xs rounded-full bg-[#0000002A] border-black text-gray-300 hover:bg-black hover:text-white hover:border-white">
                      3
                    </a>
                  </div>
            </div>
        </div>
        <div id="item3" className="carousel-item w-full relative">
          <img
            src={img3}
            className="w-full"
          />
          <div className="absolute flex justify-between px-10  w-full items-center bg-[#0000007A] h-full text-white">
          <div className="md:space-y-4  text-white  p-2" data-aos="fade-right">
                    <h4 className="text-cyan-600 md:text-3xl text-lg font-bold">Find yourself in a great book</h4>
                    <p className="font-bold text-xl lg:text-6xl">Learn and share with others at Book<span className="text-cyan-600 lg:text-7xl">Sphere</span> Shop. <br />
                                        </p>
                                      </div>
                  <div className=" flex flex-col gap-2">
                    <a href="#item1" className="btn btn-xs rounded-full bg-[#0000002A] border-black text-gray-300 hover:bg-black hover:text-white hover:border-white">
                      1
                    </a>
                    <a href="#item2" className="b
                    
                    tn btn-xs rounded-full bg-[#0000002A] border-black text-gray-300 hover:bg-black hover:text-white hover:border-white">
                      2
                    </a>
                    <a href="#item3" className="btn btn-xs rounded-full bg-[#0000002A] border-black text-gray-300 hover:bg-black hover:text-white hover:border-white">
                      3
                    </a>
                  </div>
            </div>
        </div>
      
      </div>
    );
};

export default Banner;