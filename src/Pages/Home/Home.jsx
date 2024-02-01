
import Categories from "../../Layout/Categories/Categories";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Blog from "./Blog";



const Home = () => {
    return (
        <div>
         
          <Banner></Banner>
          <Categories></Categories>
          <Blog></Blog>
          <AboutUs></AboutUs>
        </div>
    );
};

export default Home;