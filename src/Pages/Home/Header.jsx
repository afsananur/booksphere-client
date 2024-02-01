import { Link } from "react-router-dom";

import icon from "../../assets/Image/icon.jpg"
import { useContext } from "react";
import { AuthContext } from "../../Layout/AuthProvider/AuthProvider";

const Header = () => {

    const handleLogOut=()=>{
        logOut()
        .then(()=> {})
        .catch(error => console.log(error))
    
      }
      const {user,logOut} =useContext(AuthContext);

    const navItems= <>
    <li><Link to ="/">Home</Link></li>
    <li><Link to ="/allbooks">All Books</Link></li>
   
    <li><Link to ="/borrowed"> Borrowed Books</Link></li>
    <li><Link to ="/addbook">Add Book</Link></li>
    
   
    


    
    
     </>
    return (
      <div className="navbar ">
      <div className="navbar-start">
          <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-tertiary bg-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {navItems}
              </ul>
          </div>
          <img src={icon} className="w-28" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
              {navItems}
          </ul>
      </div>
      <div className="navbar-end">{

          user ? <div className="gap-4 flex items-center">
              <p className="hidden md:flex  text-xl ">{user.displayName}</p>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                      <img src= {user.photoURL}/>
                  </div>
              </label>
              <button className="btn bg-cyan-700 text-white   mr-3" onClick={handleLogOut}>Logout</button>
          </div> :
              <Link to='/login'>

                  <button className="btn bg-cyan-700 text-white">Login</button>
              </Link>
      }
         

      </div>
  </div>
    );
};

export default Header;