// src/components/AddJobForm.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';


const AddJobForm = () => {
  
 

  const handleSubmit = (event) => {
    event.preventDefault();
    
  
    const form = event.target;
    const jobTitle = form.jobTitle.value;
    const  deadline = form. deadline.value;
    const description = form.description.value;
    const category = form.category.value.toLowerCase();
    const minPrice = form.minPrice.value;
    const maxPrice = form.maxPrice.value;

    const addedNewJob ={
      
      jobTitle,
      deadline,
      description,
      category,
      minPrice,
      maxPrice,
    };
     // Send data to the server
    fetch("http://localhost:4100/addjob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addedNewJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Thank You!',
                text: 'Product Added Successfully',
                icon: 'success',
                confirmButtonText: 'Okay'
              })
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">Add Job</h2>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Job Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <label htmlFor="jobTitle">Job Title</label>
                      <input
                        type="text"
                        name="jobTitle"
                        id="jobTitle"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="deadline">Deadline</label>
                      <input
                        type="text"
                        name="deadline"
                        id="deadline"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        
                      />
                    </div>

                    
                    <div className="md:col-span-1">
                      <label htmlFor="category">Category</label>
                      <select
                        name="category"
                        id="category"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      
                      >
                        <option value="">Select Category</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Graphics Design">Graphics Design</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="description">Description</label>
                      <textarea
                        name="description"
                        id="description"
                        className="h-20 border mt-1 rounded px-4 w-full bg-gray-50"
                      
                      ></textarea>
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="minPrice">Minimum Price</label>
                      <input
                        type="text"
                        name="minPrice"
                        id="minPrice"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="maxPrice">Maximum Price</label>
                      <input
                        type="text"
                        name="maxPrice"
                        id="maxPrice"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end mt-6">
                  <button className="bg-[#198754] hover:bg-[#20c997] text-white font-bold py-2 px-4 rounded" type="submit">
                    Add Job
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJobForm;
