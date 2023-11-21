import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-100 pt-8 pb-6">
      <div className="container mx-auto px-4 font-EBGaramond">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex items-center gap-2">
              <img src="https://i.ibb.co/bJVcjyN/icon.png" alt="" />
              <a className="text-3xl font-bold leading-none" href="">
                JOBI
              </a>
            </div>
            <h4 className="text-3xl font-semibold text-blueGray-700">
              Lets keep in touch!
            </h4>

            <p>
              If you have any questions or concerns, feel free to reach out to
              us:
            </p>

            
            <div className="mt-6 lg:mb-0 mb-6">
            <p className="text-lg font-semibold text-blueGray-700">Social Media Links</p>
              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-facebook-square"></i>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-dribbble"></i>
              </button>
              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-lg font-semibold mb-2">
                  Address
                </span>
                <address>
             
              <p>BANGLADESH</p>
              <p>DHAKA 1212, FC 54321</p>
              <p>Country of Make-Believe</p>
            </address>

            <p>
              Email: <a href="mailto:info@example.com">info@jobi.com</a>
            </p>
            
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-lg font-semibold mb-2">
                 Contact Us
                </span>
                <ul className="list-unstyled">
                 
                  
                  <li>
                    
                    <p>Call: 01700000000</p>
                    <p>Email: jobi@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span>
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-blueGray-500 hover:text-gray-800"
                target="blank"
              >
                jobi
              </a>
              <a
                href="https://www.creative-tim.com?ref=njs-profile"
                className="text-blueGray-500 hover:text-blueGray-800"
              ></a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
