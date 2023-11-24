import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../Layout/Roots";
import Home from "../Pages/Home/Home";
import Registrations from "../Pages/Registrations/Registrations";
import Login from "../Pages/Login/Login"
import ErrorPage from "../Pages/Error/ErrorPage";
import AddJobForm from "../Pages/AddJobs/AddJobForm";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import MyBids from "../Pages/MyBids/MyBids";
import BidRequest from "../Pages/BidRequest/BidRequest";
import Details from "../Pages/JobDetails/Details";
import UpdatePost from "../Compunents/UpdatePost/UpdatePost";
import PrivateRoute from "./PrivateRoute";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
          
        },
      
        {
          path:"/addjob",
          element:<PrivateRoute><AddJobForm></AddJobForm></PrivateRoute>
        },
        {
          path:"/updatepost/:id", 
          element:<UpdatePost></UpdatePost>,
          loader: ({params}) => fetch(`  https://jobi-server-site.vercel.app/jobs/${params.id}`)
        },
        {
          path:"/jobs/:_id",
          element:<PrivateRoute><Details></Details></PrivateRoute>
        },
        {
          path:"/mypostedjobs",
          element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
          path:"/registration",
          element:<Registrations></Registrations>
        },
        {
          path:"/mybids",
          element:<PrivateRoute><MyBids></MyBids></PrivateRoute>
        },
        {
          path:"/bidrequest",
          element:<PrivateRoute><BidRequest></BidRequest></PrivateRoute>
        },
        {
          path:"/login",
          element:<Login></Login>
        }
    ]
    },
  ]);
  export default router;