// import { Link, NavLink } from "react-router-dom";

// import { useContext, useState } from "react";
// import { AuthContext } from "../../../AuthProvider/AuthProvider";

// const NavBar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const handelSingOut = () => {
//     logOut();
//   };

//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   // Function to toggle the dropdown
//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };
//   return (
//     <div className="max-w-[1600px] mx-auto">
//       <div className=" navbar px-4 py-2 bg-white shadow-md">
//         <div className="flex items-center">
//           <img src="https://i.ibb.co/bJVcjyN/icon.png" alt="" />
//           <a className="text-3xl font-bold leading-none" href="">
//             JOBI
//           </a>
//         </div>
//         <div className="navbar-start">
//           <div className="dropdown ">
//             <label tabIndex={0} className="lg:hidden " onClick={toggleDropdown}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 ></path>
//               </svg>
//             </label>
//             {isDropdownOpen && (
//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content mt-3 z-[1] p-2   w-52"
//               >
//                 <li>
//                   <a
//                     className="text-sm text-black hover:text-gray-500"
//                     href="#"
//                   >
//                     <NavLink
//                       to="/"
//                       className={({ isActive, isPending }) =>
//                         isPending
//                           ? "pending"
//                           : isActive
//                           ? " hover:text-gray-500 underline"
//                           : ""
//                       }
//                     >
//                       Home
//                     </NavLink>
//                   </a>
//                 </li>
//                 <li className="text-gray-300">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     stroke="currentColor"
//                     className="w-4 h-4 current-fill"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       stroke
//                       width="2"
//                       d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
//                     />
//                   </svg>
//                 </li>
//                 <li>
//                   <a
//                     className="text-sm text-black hover:text-gray-500"
//                     href="#"
//                   >
//                     <NavLink
//                       to="/addjob"
//                       className={({ isActive, isPending }) =>
//                         isPending
//                           ? "pending"
//                           : isActive
//                           ? " hover:text-gray-500 underline"
//                           : ""
//                       }
//                     >
//                       Add Job
//                     </NavLink>
//                   </a>
//                 </li>
//                 <li className="text-gray-300">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     stroke="currentColor"
//                     className="w-4 h-4 current-fill"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       stroke
//                       width="2"
//                       d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
//                     />
//                   </svg>
//                 </li>
//                 <li>
//                   <a
//                     className="text-sm text-black hover:text-gray-500 "
//                     href="#"
//                   >
//                     <NavLink
//                       to="/mypostedjobs"
//                       className={({ isActive, isPending }) =>
//                         isPending
//                           ? "pending"
//                           : isActive
//                           ? " hover:text-gray-500 underline"
//                           : ""
//                       }
//                     >
//                       My posted jobs
//                     </NavLink>
//                   </a>
//                 </li>
//                 <li className="text-gray-300">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     stroke="currentColor"
//                     className="w-4 h-4 current-fill"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       stroke
//                       width="2"
//                       d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
//                     />
//                   </svg>
//                 </li>

//                 <li>
//                   <a
//                     className="text-sm text-black hover:text-gray-500"
//                     href="#"
//                   >
//                     <NavLink
//                       to="/mybids"
//                       className={({ isActive, isPending }) =>
//                         isPending
//                           ? "pending"
//                           : isActive
//                           ? " hover:text-gray-500 underline"
//                           : ""
//                       }
//                     >
//                       My Bids
//                     </NavLink>
//                   </a>
//                 </li>
//                 <li className="text-gray-300">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     stroke="currentColor"
//                     className="w-4 h-4 current-fill"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       stroke
//                       width="2"
//                       d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
//                     />
//                   </svg>
//                 </li>
//                 <li>
//                   <a
//                     className="text-sm text-black hover:text-gray-500"
//                     href="#"
//                   >
//                     <NavLink
//                       to="/bidrequest"
//                       className={({ isActive, isPending }) =>
//                         isPending
//                           ? "pending"
//                           : isActive
//                           ? " hover:text-gray-500 underline"
//                           : ""
//                       }
//                     >
//                       Bid Requests
//                     </NavLink>
//                   </a>
//                 </li>
//               </ul>
//             )}
//           </div>
//         </div>

//         {/* large  */}
//         <div className=" navbar hidden lg:flex gap-10 ">
//           <ul className="menu-horizontal gap-5   ">
//             <li>
//               <a className="text-sm text-black hover:text-gray-500" href="#">
//                 <NavLink
//                   to="/"
//                   className={({ isActive, isPending }) =>
//                     isPending
//                       ? "pending"
//                       : isActive
//                       ? " hover:text-gray-500 underline"
//                       : ""
//                   }
//                 >
//                   Home
//                 </NavLink>
//               </a>
//             </li>
//             <li className="text-gray-300">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 stroke="currentColor"
//                 className="w-4 h-4 current-fill"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   stroke
//                   width="2"
//                   d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
//                 />
//               </svg>
//             </li>
//             <li>
//               <a className="text-sm text-black hover:text-gray-500" href="#">
//                 <NavLink
//                   to="/addjob"
//                   className={({ isActive, isPending }) =>
//                     isPending
//                       ? "pending"
//                       : isActive
//                       ? " hover:text-gray-500 underline"
//                       : ""
//                   }
//                 >
//                   Add Job
//                 </NavLink>
//               </a>
//             </li>
//             <li className="text-gray-300">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 stroke="currentColor"
//                 className="w-4 h-4 current-fill"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   stroke
//                   width="2"
//                   d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
//                 />
//               </svg>
//             </li>
//             <li>
//               <a className="text-sm text-black hover:text-gray-500 " href="#">
//                 <NavLink
//                   to="/mypostedjobs"
//                   className={({ isActive, isPending }) =>
//                     isPending
//                       ? "pending"
//                       : isActive
//                       ? " hover:text-gray-500 underline"
//                       : ""
//                   }
//                 >
//                   My posted jobs
//                 </NavLink>
//               </a>
//             </li>
//             <li className="text-gray-300">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 stroke="currentColor"
//                 className="w-4 h-4 current-fill"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   stroke
//                   width="2"
//                   d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
//                 />
//               </svg>
//             </li>

//             <li>
//               <a className="text-sm text-black hover:text-gray-500" href="#">
//                 <NavLink
//                   to="/mybids"
//                   className={({ isActive, isPending }) =>
//                     isPending
//                       ? "pending"
//                       : isActive
//                       ? " hover:text-gray-500 underline"
//                       : ""
//                   }
//                 >
//                   My Bids
//                 </NavLink>
//               </a>
//             </li>
//             <li className="text-gray-300">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 stroke="currentColor"
//                 className="w-4 h-4 current-fill"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   stroke
//                   width="2"
//                   d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
//                 />
//               </svg>
//             </li>
//             <li>
//               <a className="text-sm text-black hover:text-gray-500" href="#">
//                 <NavLink
//                   to="/bidrequest"
//                   className={({ isActive, isPending }) =>
//                     isPending
//                       ? "pending"
//                       : isActive
//                       ? " hover:text-gray-500 underline"
//                       : ""
//                   }
//                 >
//                   Bid Requests
//                 </NavLink>
//               </a>
//             </li>
//           </ul>

//           {user ? (
//             <div
//               className="flex gap-10 items-center 
//           "
//             >
//               <img
//                 className="rounded-sm w-12 h-12"
//                 src={user.photoURL}
//                 alt=""
//               />
//               <p className="text-xs ">{user.displayName}</p>
//               <button
//                 onClick={handelSingOut}
//                 className="btn  mb-2 rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//               >
//                 Sing Out
//               </button>
//             </div>
//           ) : (
//             <div
//               className="  flex gap-10 items-center  mt-2
//           "
//             >
//               <Link to={"/login"}>
//                 <a className="block px-4 py-3 mb-3  text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl">
//                   Log In
//                 </a>
//               </Link>
//               <Link to={"/registration"}>
//                 <a className="block px-4 py-3 mb-3  text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl">
//                   Regitration
//                 </a>
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
