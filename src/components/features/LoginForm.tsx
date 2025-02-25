import React, { useState } from "react";
import bgLogin from "../../assets/login-illustrator.png";
import iconGoogle from "../../assets/google.svg";
import iconFacebook from "../../assets/facebook.svg";
import logoIcon from "../../assets/LOGO 1.svg";
import InputGroup from "../common/InputGroup";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  console.log(searchQuery);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Here you would typically send the data to your backend for authentication
    console.log("Email:", email);
    console.log("Password:", password);

    // Reset the form and clear the error after successful "login"
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div className="flex items-center flex-wrap bg-white rounded-xl shadow-xl  justify-center w-full  2xl:w-10/12 m-auto ">
      <div className=" p-8 py-12 border-r border-gray-300 w-full xl:w-2/5 ">
        <img className="my-3 m-auto" src={logoIcon} alt="" />
        <h2 className="text-xl font-bold my-10 text-center text-gray-800">
          Login into your account
        </h2>

        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <InputGroup
            label="Email"
            icon={<EnvelopeIcon className="h-5 w-5 text-white " />} // Use react-icons
            placeholder="xxxx@gmail.com"
            type="search"
            value={""}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="" // Add custom width
          />
          <InputGroup
            label="Password"
            icon={<LockClosedIcon className="h-5 w-5 text-white " />} // Use react-icons
            placeholder="Abc@123"
            type="search"
            value={""}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="" // Add custom width
          />

          <div className="flex mt-12 items-center justify-between">
            <button
              className="bg-orange-500 hover:bg-orange-700 focus:shadow-md shadow-orange-300 shadow-lg text-white 
               py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Login Now
            </button>
          </div>
          <p className="w-full mt-6 mb-6 text-center"> OR </p>

          <div className="flex items-center justify-between">
            <button
              className=" border-orange-500 border text-orange-500 hover:bg-orange-500 hover:text-white    py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Signup Now
            </button>
          </div>
          <div className="flex items-center justify-between mt-6">
            <button
              className="justify-center border-gray-300 border flex text-gray-500 items-center
                py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full hover:border hover:border-orange-500 hover:text-orange-500"
              type="submit"
            >
              <img src={iconGoogle} alt="" className="w-6 mr-3" />Login with Google
            </button>
          </div>
          <div className="flex items-center justify-between mt-6">
            <button
              className="justify-center border-gray-300 border flex text-gray-500 items-center
                py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full hover:border hover:border-orange-500 hover:text-orange-500"
              type="submit"
            >
              <img src={iconFacebook} alt="" className="w-6 mr-3" />Login with Facebook
            </button>
          </div>
        </form>
      </div>
      <div className="w-3/5">
        <img src={bgLogin} className="w-full object-cover" alt="" />
      </div>
    </div>
  );
};

export default LoginForm;
