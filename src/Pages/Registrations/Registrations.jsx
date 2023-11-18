import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const auth = getAuth(app);

const Registrations = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    if (!name) {
        setRegisterError("Please enter Your Name");
        return;
      }
  
      if (!email) {
        setRegisterError("Please enter your email");
        return;
      }
    if (password.length < 6) {
      setRegisterError("Enter At Least 6 Character Password");
      return;
    } else if (!/[A-z]/.test(password)) {
      setRegisterError("You should enter a capital letter");
      return;
    } else if (!/[@$!%*?&]/.test(password)) {
      setRegisterError("You should enter a Special Character ");
      return;
    }

    setRegisterError("");
    setSuccess("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setSuccess("Your Account Created Successfully");

        Swal.fire("Registration and Login Successful", "success");

        const userData = { email, name };

        fetch("http://localhost:4100/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "Thank You!",
                text: "User Added Successfully",
                icon: "success",
                confirmButtonText: "Okay",
              });
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      })
      .catch((error) => {
        console.error("Error:", error);

        Swal.fire("Error", "User registration failed", "error");
      });
  };

  return (
    <div className="h-full bg-gray-400 dark:bg-gray-900 font-EBGaramond">
      <div className="mx-auto">
        <div className="flex justify-center px-6 py-12">
          <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
            <h3 className="py-4 text-4xl font-bold text-center text-gray-800 dark:text-white">
              Create an Account!
            </h3>
            <form
              onSubmit={handleSubmit}
              className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded"
            >
              <div className="mb-4 ">
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                />
              </div>
                
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  htmlFor="password"
                >
                 Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="password"
                />
              </div>
              
              <div className="mb-6 text-center">
                <button
                  className="bg-[#31795a] text-white font-bold py-2 px-4 w-full rounded hover:bg-[#00bf58]"
                  type="submit"
                >
                  Register Account
                </button>
              </div>
              <hr className="mb-6 border-t" />
              
              <div className="mx-auto text-center">
                {success && <p className="text-blue-400  mb-6">{success}</p>}
                {registerError && <p className="text-red-400  mb-6">{registerError}</p>}
              </div>
              <div className="text-center">
                <h3>Have an account? </h3>
                <Link
                  className="inline-block  text-[#31795a] font-bold text-lg"
                  to="/login"
                >
                  Login!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrations;
