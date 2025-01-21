import React, { useState } from "react";

const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Quản lý mục đang active
  const items = ["Vegan", "Sushi", "Pizza & Fast food", "Others"]; // Danh sách mục

  const restaurants = [
    {
      id: 1,
      avatar: "/mcdonal.png",
      name: "McDonald’s London ",
    },
    {
      id: 2,
      avatar: "/Rectangle 13 (1).png",
      name: "Papa Johns",
    },
    {
      id: 3,
      avatar: "/Rectangle 13 (2).png",
      name: "KFC West London",
    },
    {
      id: 4,
      avatar: "/Rectangle 13 (3).png",
      name: "Texas Chicken",
    },
    {
      id: 5,
      avatar: "/Rectangle 13 (4).png",
      name: "Burger King",
    },
    {
      id: 6,
      avatar: "/Rectangle 13 (5).png",
      name: "Shaurma 1",
    },
  ];
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
      <div className="flex justify-between mt-12">
        <span className="font-bold text-xl">
          Up to -40% 🎊 Order.uk exclusive deals
        </span>

        <ul className="flex space-x-12 list-none cursor-pointer">
          {items.map((item, index) => (
            <li
              key={index}
              className={`px-6 py-4 ${
                activeIndex == index
                  ? "border rounded-full border-orange-500 text-orange-500 font-bold"
                  : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex space-x-4 mt-12 mb-12">
        <div className="relative   w-full md:flex-1 h-full">
          <img
            src="/Rectangle 8 (1).png"
            className="object-cover w-full rounded-xl"
            alt=""
          />
          <div className="bg-gradient-to-tr from-black/90  absolute  to-gray-50/0 h-full w-full  top-0 rounded-xl">
            <div className="absolute bottom-0 py-3 mb-6 w-full px-6 ">
              <p className="text-orange-500 mb-3 font-medium">Restaurant</p>
              <p className="font-bold text-lg text-white">
                Chef Burgers London
              </p>
            </div>
          </div>

          <span className="bg-black p-5 rounded-b-2xl text-white top-0 right-3 absolute">
            -40%
          </span>
        </div>
        <div className="relative   w-full md:flex-1 h-full">
          <img
            src="/Rectangle 8 (1).png"
            className="object-cover w-full rounded-xl"
            alt=""
          />
          <div className="bg-gradient-to-tr from-black/90  absolute  to-gray-50/0 h-full w-full  top-0 rounded-xl">
            <div className="absolute bottom-0 py-3 mb-6 w-full px-6 ">
              <p className="text-orange-500 mb-3 font-medium">Restaurant</p>
              <p className="font-bold text-lg text-white">
                Chef Burgers London
              </p>
            </div>
          </div>

          <span className="bg-black p-5 rounded-b-2xl text-white top-0 right-3 absolute">
            -40%
          </span>
        </div>
        <div className="relative   w-full md:flex-1 h-full">
          <img
            src="/Rectangle 8 (1).png"
            className="object-cover w-full rounded-xl"
            alt=""
          />
          <div className="bg-gradient-to-tr from-black/90  absolute  to-gray-50/0 h-full w-full  top-0 rounded-xl">
            <div className="absolute bottom-0 py-3 mb-6 w-full px-6 ">
              <p className="text-orange-500 mb-3 font-medium">Restaurant</p>
              <p className="font-bold text-lg text-white">
                Chef Burgers London
              </p>
            </div>
          </div>

          <span className="bg-black p-5 rounded-b-2xl text-white top-0 right-3 absolute">
            -40%
          </span>
        </div>
      </div>

      <div className="flex justify-between mt-12 mb-12">
        <span className="font-bold text-xl">
          Order.uk Popular Categories 🤩
        </span>
      </div>
      <div className="flex space-x-4 mt-12 mb-12">
        <div className="relative   w-full md:flex-1 h-full border bg-zinc-100 rounded-xl">
          <img
            src="\Rectangle 13.png"
            className="object-cover w-full "
            alt=""
          />
          <p className="font-bold mt-3 px-3"> Burgers & Fast food</p>
          <p className="text-sm text-orange-500 px-3 mt-1 mb-3">
            21 Restaurants
          </p>
        </div>
        <div className="relative   w-full md:flex-1 h-full border bg-zinc-100 rounded-xl">
          <img
            src="\Rectangle 23.png"
            className="object-cover w-full "
            alt=""
          />
          <p className="font-bold mt-3 px-3"> Burgers & Fast food</p>
          <p className="text-sm text-orange-500 px-3 mt-1 mb-3">
            21 Restaurants
          </p>
        </div>

        <div className="relative   w-full md:flex-1 h-full border bg-gray-100 rounded-xl">
          <img
            src="\Rectangle 15.png"
            className="object-cover w-full "
            alt=""
          />
          <p className="font-bold mt-3 px-3"> Burgers & Fast food</p>
          <p className="text-sm text-orange-500 px-3 mt-1 mb-3">
            21 Restaurants
          </p>
        </div>
        <div className="relative   w-full md:flex-1 h-full border bg-gray-100 rounded-xl">
          <img
            src="\Rectangle 17.png"
            className="object-cover w-full "
            alt=""
          />
          <p className="font-bold mt-3 px-3"> Burgers & Fast food</p>
          <p className="text-sm text-orange-500 px-3 mt-1 mb-3">
            21 Restaurants
          </p>
        </div>

        <div className="relative   w-full md:flex-1 h-full border bg-gray-100 rounded-xl">
          <img
            src="\Rectangle 19.png"
            className="object-cover w-full "
            alt=""
          />
          <p className="font-bold mt-3 px-3"> Burgers & Fast food</p>
          <p className="text-sm text-orange-500 px-3 mt-1 mb-3">
            21 Restaurants
          </p>
        </div>
        <div className="relative   w-full md:flex-1 h-full border bg-gray-100 rounded-xl">
          <img
            src="\Rectangle 21.png"
            className="object-cover w-full "
            alt=""
          />
          <p className="font-bold mt-3 px-3"> Burgers & Fast food</p>
          <p className="text-sm text-orange-500 px-3 mt-1 mb-3">
            21 Restaurants
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-12 mb-12">
        <span className="font-bold text-xl">Popular Restaurants</span>
      </div>

      <div className="flex space-x-4 mt-12 mb-12">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="relative   w-full md:flex-1 h-full border bg-orange-500 rounded-xl">
            <img src={restaurant.avatar} className="object-contain w-full " alt="" />
            <p className="text-lg font-bold text-center text-white py-5">
              {restaurant.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
