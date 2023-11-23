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
          element:<AddJobForm></AddJobForm>
        },
        {
          path:"/updatepost/:id", 
          element:<UpdatePost></UpdatePost>,
          loader: ({params}) => fetch(`http://localhost:4100/jobs/${params.id}`)
        },
        {
          path:"/jobs/:_id",
          element:<Details></Details>
        },
        {
          path:"/mypostedjobs",
          element:<MyPostedJobs></MyPostedJobs>
        },
        {
          path:"/registration",
          element:<Registrations></Registrations>
        },
        {
          path:"/mybids",
          element:<MyBids></MyBids>
        },
        {
          path:"/bidrequest",
          element:<BidRequest></BidRequest>
        },
        {
          path:"/login",
          element:<Login></Login>
        }
    ]
    },
  ]);
  export default router;