import React from "react";

const Home: React.FC = () => {
  const divStyle = {
    backgroundImage: "url('/Rectangle 8 (1).png')",
    backgroundSize: "cover",
  };
  return (
    <div>
      <div className="bg-gray-100 relative w-full pt-5 px-12  h-[35rem] rounded-md">
        <div className="bg-orange-500 w-2/5 absolute right-0 bottom-0 rounded-s-full h-[33rem]"></div>

        <div className="absolute translate-x-12 bottom-0 left-1/2">
          <img src="\Untitled-2 1.png" alt="" />
        </div>

        <div className="w-1/2">
          <div className="bg-white rounded-xl p-4 absolute  w-1/5 right-48 top-12">
            <img src="\logo.svg" alt="" className="w-16 mb-3" />
            <p className="text-sm font-bold">We’ve Received your order!</p>
            <p className="text-sm">Awaiting Restaurant acceptance </p>
          </div>
          <div className="bg-white rounded-xl p-4 absolute  w-1/5 right-12 top-56">
            <img src="\logo.svg" alt="" className="w-16 mb-3" />
            <p className="text-sm">We’ve Received your order!</p>
            <p className="text-sm">Awaiting Restaurant acceptance </p>
          </div>
          <div className="bg-white rounded-xl p-4 absolute  w-1/5 right-32 top-96">
            <img src="\logo.svg" alt="" className="w-16 mb-3" />
            <p className="text-sm">We’ve Received your order!</p>
            <p className="text-sm">Awaiting Restaurant acceptance </p>
          </div>
        </div>
        <div className="absolute -translate-x-1/2 bottom-0 left-1/2">
          <img src="\Untitled-1 1.png" alt="" />
        </div>

        <div className="top-1/2 absolute -translate-y-1/2">
          <span className="text-sm text-gray-500">
            Order Restaurant food, takeaway and groceries.
          </span>
          <h1 className="text-[2.5rem] font-medium mt-3">
            Feast Your Senses,{" "}
          </h1>
          <h1 className="text-[2.5rem] font-bold text-orange-500 mb-3">
            Fast and Fresh
          </h1>

          <span>Enter a postcode to see what we deliver</span>
          <div className="mb-6">
            <div className="relative rounded-md shadow-sm mt-4 w-3/4">
              {" "}
              {/* Added className prop */}
              <input
                className="appearance-none right-0 ring-orange-300 border ring-0 outline-none  w-full py-2 px-3 rounded-full  text-gray-700 leading-tight focus:outline-none"
                placeholder="e.g. EC4R 3TE"
                value=""
              />
              <div className=" cursor-pointer hover:ring-4 hover:ring-orange-200  rounded-full text-white  absolute -bottom-0 -right-1 flex items-center bg-orange-500 px-12  py-[.4rem]">
                Search
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* component */}
      <div className="flex justify-content-center mt-12 mb-12">
        <div
          // style={divStyle}
          className="relative border  w-full md:w-1/3 h-80"
        >

          <img
            src="/Rectangle 8 (1).png"
            className=" object-cover w-full"
            alt=""
          />
          <div className="bg-gradient-to-r from-gray-600  to-gray-50  h-full w-full absolute top-0"></div>

          <span className="bg-black p-5 text-white rounded-md bottom-0 right-3 absolute">
            -40%
          </span>

          <div className="absolute bottom-0 py-3 w-full px-6 ">
            <p className="text-orange-500 mb-3 font-bold">Restaurant</p>
            <p className="font-bold text-lg text-white">Chef Burgers London</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
