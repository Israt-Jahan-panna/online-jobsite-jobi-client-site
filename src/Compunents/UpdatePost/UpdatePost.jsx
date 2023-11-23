import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const UpdatePost = () => {
  const job = useLoaderData();
  const {
  _id,
  buyerEmail,
  jobTitle,
  deadline,
  description,
  shortdescription,
  category,
  minPrice,
  maxPrice,
        } = job ;
    const { user } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    // Check if user is defined and has an email property
    if (user && user.email) {
      // Update the state with the user's email
      setUserEmail(user.email);
    }
  }, [user]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
    const handelUpdatePost = (event) => {
      
    
        event.preventDefault();
    const form = event.target;
    const jobTitle = form.jobTitle.value;
    const buyerEmail = form.buyerEmail.value;
    const deadline = form.deadline.value;
    const description = form.description.value;
    const shortdescription = form.shortdescription.value;
    const category = form.category.value.toUpperCase();
    const minPrice = form.minPrice.value;
    const maxPrice = form.maxPrice.value;
    
        const UpdatePost = {
        
            user,
            buyerEmail,
            jobTitle,
            deadline,
            description,
            shortdescription,
            category,
            minPrice,
            maxPrice,
        };
        console.log(UpdatePost);
        setError("");
        setSuccess("");
        
    
        // Send data to the server
        fetch(`http://localhost:4100/jobs/${_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(UpdatePost),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "Thank You!",
                text: "Jobs Added Successfully",
                icon: "success",
                confirmButtonText: "Okay",
              }).then(() => {
                // Redirect to /mypostedjobs
                window.location.href = "/mypostedjobs";
              });
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        };
    
    return (
        <div className="min-h-screen p-6 bg-gray-100  font-EBGaramond">
        <div className="container max-w-screen-lg mx-auto flex items-center justify-center ">
          <div>
            <h3 className="text-7xl font-extrabold text-[#198754] mb-8">
              Find the talents for any job.
            </h3>
            <p className="font-semibold text-2xl text-gray">
              Unlock your potential with quality job & earn from world leading
              brands & co.
            </p>
          </div>
          <div>
            <img src="https://i.ibb.co/N2vGxSy/ils-01-2.png" alt="" />
          </div>
        </div>
  
        <div className="container max-w-screen-lg mx-auto">
          <div className="mt-5">
            <h2 className="font-semibold text-2xl text-center text-black rounded-lg p-4 bg-[#20c997] ">
              UPDATE YOUR POST{" "}
            </h2>
  
            <div className="bg-white rshadow-lg p-4 px-4 md:p-8 mb-6 rounded-md">
              <form onSubmit={handelUpdatePost}>
                <div className="grid gap-4 gap-y-2 text-lg grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Job Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>
  
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-lg grid-cols-1 md:grid-cols-2">
                      <div className="md:col-span-2">
                        <label htmlFor="jobTitle">Job Title</label>
                        <input
                          type="text"
                          name="jobTitle"
                          id="jobTitle"
                          defaultValue={jobTitle}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>
                      <div className="md:col-span-2 text-black">
                        <label htmlFor="jobTitle">Email of the Employee</label>
                        <input
                          name="buyerEmail"
                          id="buyerEmail"
                          className="h-10 border mt-1 rounded px-4 w-full "
                          readOnly
                          value={userEmail}
                        />
                      </div>
  
                      <div className="md:col-span-1">
                        <label htmlFor="deadline">Deadline</label>
                        <input
                          type="text"
                          name="deadline"
                          id="deadline"
                          defaultValue={deadline}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>
  
                      <div className="md:col-span-1">
                        <label htmlFor="category">Category</label>
                        <select
                          name="category"
                          id="category"
                          // defaultValue={}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        >
                          <option value="">{category}</option>
                          <option value="Web Development">WEB DEVLOPMENT</option>
                          <option value="Digital Marketing">
                           DIGITAL MARKETING
                          </option>
                          <option value="Graphics Design">GRAPHICS DESING</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="shortdescription">
                          Short Description
                        </label>
                        <textarea
                          name="shortdescription"
                          id="shortdescription"
                          defaultValue={shortdescription}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        ></textarea>
                      </div>
  
                      <div className="md:col-span-2">
                        <label htmlFor="description">Description</label>
                        <textarea
                          name="description"
                          id="description"
                          defaultValue={description}
                          className="h-20 border mt-1 rounded px-4 w-full bg-gray-50"
                        ></textarea>
                      </div>
  
                      <div className="md:col-span-1">
                        <label htmlFor="minPrice">Minimum Price</label>
                        <input
                          type="text"
                          name="minPrice"
                          id="minPrice"
                          defaultValue={minPrice}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>
  
                      <div className="md:col-span-1">
                        <label htmlFor="maxPrice">Maximum Price</label>
                        <input
                          type="text"
                          name="maxPrice"
                          id="maxPrice"
                          defaultValue={maxPrice}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5 text-right">
                    <div className="flex items-center justify-center gap-4 mt-6">
                      <div>
                        {success && (
                          <p className="text-blue-400  mb-6">{success}</p>
                        )}
                        {error && <p className="text-red-400  mb-6">{error}</p>}
                      </div>
                      <div>
                        <button
                          className="bg-[#198754] hover:bg-[#20c997] text-white font-bold py-2 px-4 rounded "
                          type="submit"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdatePost;