import React, {  } from 'react';


const JobDetails = ({jobs}) => {
    const {_id,  description , shortdescription , jobTitle , deadline , maxPrice, category ,minPrice  }= jobs || {} ;

    const handelAddCard =() =>{
      const myCard = {
        _id,
        jobTitle,
        description,
        category,
        maxPrice,
        minPrice,
       deadline,
        shortdescription
      };
      console.log(myCard);
      // Send data to the server
    //   fetch("https://fashion-and-apparel-shop-server-6ol0g5b2m-israt-jahans-projects.vercel.app/myproduct"
    //   , {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(myCard), }
    //   )
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       if(data.insertedId){
    //           Swal.fire({
    //               title: 'Thank You!',
    //               text: 'Add to Card Successful',
    //               icon: 'success',
    //               confirmButtonText: 'Okay'
    //             })
    //       }
    //     })
        
    }
    return (
        <div>
            <div className="mx-24 font-SometypeMono">
      <div className=" text-center">
        <h4 className="uppercase text-2xl font-extrabold w-full">
          Category {category}
        </h4>
      </div>
      <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img src="" alt="ui/ux review check" />
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        </div>
        <div className="p-3">
          <div className="flex  justify-center gap-5 mb-3">
            <h5 className="block text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900 uppercase">
              Brand: {}
            </h5>
            <h5 className="block text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900 uppercase">
            Name: {}
          </h5>
          </div>
          
          <div className='flex gap-5 justify-center'>
          <p className="block text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
            Price : $ {}
          </p>
          <p className="block text-base antialiased font-light leading-relaxed text-gray-700">
            Type: {}
          </p>
          </div>
          <h3 className='text-center font-extrabold text-lg'>{description}</h3>
        </div>
        <div className="flex justify-center m-4">
          <>
          <button onClick={handelAddCard} className="btn bg-[#FF324D] rounded-lg mt-3 " type="button">
            Add To Cart
          </button></>
        
        </div>
      </div>
    </div>
        </div>
    );
};

export default JobDetails;