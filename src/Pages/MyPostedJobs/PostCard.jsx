import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const PostCard = ({ jobs, SetJobs }) => {
  const { user } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState('');

  const { _id, buyerEmail, description, shortdescription, jobTitle, deadline, maxPrice, category, minPrice } = jobs || {};
  
  useEffect(() => {
    // Check if user is defined and has an email property
    if (user && user.email) {
      // Update the state with the user's email
      setUserEmail(user.email);
    }
  }, [user]);

  const handelDelete = () => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4100/jobs/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
              );
              const remaining = jobs.filter(pro => pro._id !== _id);
              SetJobs(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      {userEmail === buyerEmail && (
        <div className="bg-white rounded-lg shadow-md p-8 m-12">
          <div className="flex flex-col md:flex-row md:justify-between lg:items-center lg:justify-between ">
            <div className="mb-4 md:mb-0 ">
              <h2 className="text-2xl font-semibold w-14">{jobTitle}</h2>
            </div>

            <div className="mb-4 md:mb-0 ">
              <span className="text-[#00bf58] font-bold">
                Price Range <br />
              </span>
              <span className="font-semibold">
                {minPrice} - {maxPrice}
                <span className="opacity-40"></span>
              </span>
            </div>

            <div className="mb-4 md:mb-0">
              <span className="text-gray-600 font-bold">
                Description
                <br />
              </span>
              <span className="text-black text-lg">{shortdescription}</span>
            </div>

            <div className="mb-4 md:mb-0">
              <span className="text-gray-600 font-bold text-lg">
                Deadline <br />
              </span>
              <span className="font-extrabold">{deadline}</span>
            </div>

            <div className="flex gap-4 items-center">
              <i className="fa-regular fa-bookmark" style={{ color: "#244034" }}></i>

              <div className="flex justify-center gap-4">
                <Link to={`/updatepost/${_id}`}>
                <button className="bg-[#198754] hover:bg-[#00bf58] text-white px-8 py-2 rounded-xl text-sm">
                  Update
                </button>
                </Link>
                <button onClick={handelDelete} className="bg-[#198754] hover:bg-[#00bf58] text-white px-8 py-2 rounded-xl text-sm">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
