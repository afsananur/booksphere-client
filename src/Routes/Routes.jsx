import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Layout/Login/Login";
import Register from "../Layout/Register/Register";
import AllBooks from "../Layout/AllBooks/AllBooks";
import PrivateRoutes from "./PrivateRoutes";
import CategoryBook from "../Layout/CategoryBook/CategoryBook";
import BookDetails from "../Layout/CategoryBook/BookDetails";
import BorrowedBooks from "../Layout/Borrowed/BorrowedBooks";
import UpdateBook from "../Layout/UpdateBook/UpdateBook";
import AddBook from "../Layout/UpdateBook/AddBook";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
          },
        {
            path:'/register',
            element:<Register></Register>
          },
        {
            path:'/allbooks',
            element:<PrivateRoutes><AllBooks></AllBooks></PrivateRoutes>
          },
        {
            path:'/borrowed',
            element:<PrivateRoutes><BorrowedBooks></BorrowedBooks></PrivateRoutes>
          },
        {
            path:'/addbook',
            element:<PrivateRoutes><AddBook></AddBook></PrivateRoutes>
          },
          {
            path:'categories/:categoryName',
            element:<PrivateRoutes><CategoryBook></CategoryBook></PrivateRoutes> ,
          },
          {
            path:'categories/:category/:id',
            element:<PrivateRoutes><BookDetails></BookDetails></PrivateRoutes> ,
          },
        
          {
            path:'/update/:categories/:id',
            element:<PrivateRoutes><UpdateBook></UpdateBook></PrivateRoutes> ,
          },
        
      ]
    },
  ]);

export default router;