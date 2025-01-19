import React, { useState } from 'react';
import bgLogin from "../../assets/login-illustrator.png"
import logoIcon from "../../assets/LOGO 1.svg"
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Here you would typically send the data to your backend for authentication
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset the form and clear the error after successful "login"
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="flex items-center justify-center h-3/4  w-4/5 m-auto">
      <div className="bg-white p-8  shadow-lg w-1/3 h-screen">

      <img className='mb-6 m-auto' src={logoIcon} alt=""  />
        <h2 className="text-2xl font-bold mb-10 text-center text-gray-800">Login into your account</h2>
        
        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline">{error}</span>
        </div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium  mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className=" appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-orange-500 hover:bg-orange-700 shadow-orange-300 shadow-lg text-white  py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Login Now
            </button>
           
          </div>
          <p className='w-full mt-3 mx- text-center'> OR </p>

          <div className="flex items-center justify-between">
            <button
              className=" border-orange-500 border text-orange-500 hover:bg-orange-500 hover:text-white    py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Signup Now
            </button>
           
          </div>
        </form>
      </div>
      <div className='w-2/3'>
          
      <img src={bgLogin} alt=""  />
      </div>
    </div>
  );
};

export default LoginForm;