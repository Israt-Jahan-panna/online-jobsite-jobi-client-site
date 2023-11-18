// src/components/AddJobForm.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';


const AddJobForm = ({ user,  history }) => {
  const [jobData, setJobData] = useState({
    employerEmail: user,
    jobTitle: '',
    deadline: '',
    description: '',
    category: '',
    minPrice: '',
    maxPrice: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add your logic to save data to MongoDB here
    
    // Display toast
    Swal.success('Job added successfully!');
    
    // Redirect to My Posted Jobs page
    // history.push('/my-posted-jobs');
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
                        value={jobData.jobTitle}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="deadline">Deadline</label>
                      <input
                        type="text"
                        name="deadline"
                        id="deadline"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={jobData.deadline}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="category">Category</label>
                      {/* Replace the placeholder with your actual category dropdown */}
                      <select
                        name="category"
                        id="category"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={jobData.category}
                        onChange={handleChange}
                      >
                        {/* <option value="">Select Category</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))} */}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="description">Description</label>
                      <textarea
                        name="description"
                        id="description"
                        className="h-20 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={jobData.description}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="minPrice">Minimum Price</label>
                      <input
                        type="text"
                        name="minPrice"
                        id="minPrice"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={jobData.minPrice}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="maxPrice">Maximum Price</label>
                      <input
                        type="text"
                        name="maxPrice"
                        id="maxPrice"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={jobData.maxPrice}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
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
