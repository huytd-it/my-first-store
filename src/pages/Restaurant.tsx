import { PlusCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import SectionCard from "../components/common/Card/SectionCard";

const Restaurant: React.FC = () => {
  const [offerActive, setOfferActive] = useState(0);

  const discounts = [
    {
      id: 1,
      name: "First Order Discount",
      branch_name: "McDonald’s East London",
      discount: "-20%",
      avatar: "/public/discount-1.png",
    },
    {
      id: 2,
      name: "Vegan Discount",
      branch_name: "McDonald’s East London",
      discount: "-20%",
      avatar: "/public/discount-2.png",
    },
    {
      id: 3,
      name: "Free ice Cream Offer",
      branch_name: "McDonald’s East London",
      discount: "-50%",
      avatar: "/public/discount-3.png",
    },
  ];

  const burgers = [
    {
      id: 1,
      name: "Royal Cheese Burger with extra Fries",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: 2300000,
      avatar: "/public/combo-1.png",
    },
    {
      id: 2,
      name: "The classics for 3",
      description:
        "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      price: 2300000,
      avatar: "/public/combo-2.png",
    },
    {
      id: 3,
      name: "The classics for 3",
      description:
        "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      price: 2300000,
      avatar: "/public/combo-3.png",
    },
    {
      id: 4,
      name: "The classics for 3",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: 2300000,
      avatar: "/public/combo-3.png",
    },
    {
      id: 5,
      name: "The classics for 3",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: 2300000,
      avatar: "/public/combo-1.png",
    },
    {
      id: 6,
      name: "The classics for 2",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: 2300000,
      avatar: "/public/combo-2.png",
    },
  ];
  const fries = [
    {
      id: 1,
      name: "Royal Cheese Burger with extra Fries",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: 2300000,
      avatar: "/public/fries-1.png",
    },
    {
      id: 2,
      name: "The classics for 3",
      description:
        "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      price: 2300000,
      avatar: "/public/fries-2.png",
    },
    {
      id: 3,
      name: "The classics for 3",
      description:
        "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      price: 2300000,
      avatar: "/public/fries-3.png",
    },
    {
      id: 4,
      name: "The classics for 3",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: 2300000,
      avatar: "/public/fries-2.png",
    },
    {
      id: 5,
      name: "The classics for 3",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: 2300000,
      avatar: "/public/fries-3.png",
    },
    {
      id: 6,
      name: "The classics for 2",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: 2300000,
      avatar: "/public/fries-4.png",
    },
  ];
  const drinks = [
    {
      id: 1,
      name: "Royal Cheese Burger with extra Fries",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: 2300000,
      avatar: "/public/drink (1).png",
    },
    {
      id: 2,
      name: "The classics for 3",
      description:
        "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      price: 2300000,
      avatar: "/public/drink (2).png",
    },
    {
      id: 3,
      name: "The classics for 3",
      description:
        "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      price: 2300000,
      avatar: "/public/drink (3).png",
    },
    {
      id: 4,
      name: "The classics for 3",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: 2300000,
      avatar: "/public/drink (4).png",
    },
    {
      id: 5,
      name: "The classics for 3",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: 2300000,
      avatar: "/public/drink (5).png",
    },
    {
      id: 6,
      name: "The classics for 2",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: 2300000,
      avatar: "/public/drink (6).png",
    },
  ];

  return (
    <div className="">
      <div
        className="bg-cover  bg-center flex rounded-xl relative container mx-auto"
        style={{ backgroundImage: "url('/public/Rectangle 44.png')" }}
      >
        <div className="w-full bg-opacity-70 items-center bg-zinc-200 rounded-xl flex h-[30rem]">
          <div className="flex-1 p-12 ">
            <p className="mb-3">I'm lovin' it!</p>
            <p className="font-bold pb-6 text-5xl">McDonald’s East London</p>

            <div className="flex space-x-6 ">
              <button className="bg-slate-800 flex text-white px-6 py-2 rounded-full justify-center items-center space-x-2">
                <img src="/public/Motocross.png" alt="" />
                <span>Minimum Order: 12 GBP</span>
              </button>
              <button className="bg-slate-800 flex text-white px-6 py-2 rounded-full justify-center items-center space-x-2">
                <img src="/public/Order Completed.png" alt="" />

                <span>Delivery in 20-25 Minutes</span>
              </button>
            </div>
          </div>
          <div className="relative flex py-12 px-12">
            <img
              src="/public/Rectangle 64.png"
              alt=""
              className="w-28 top-[65%] -left-3  absolute "
            />
            <img src="/public/Rectangle 44.png" alt="" className="w-[37rem]" />
          </div>
        </div>

        <button className="bg-orange-400 flex text-white px-6 py-2 rounded-r-lg justify-center items-center space-x-2 absolute -bottom-3">
          <img src="/public/Clock.svg" alt="" />

          <span>Open until 3:00 AM</span>
        </button>
      </div>

      <div className="mt-12 container mx-auto px-12">
        <div className="flex justify-between">
          <span className="text-2xl  font-bold flex-1 ">
            All Offers from McDonald’s East London
          </span>

          <div className="relative w-96">
            <div className=" cursor-pointer  rounded-full text-black  absolute -bottom-0  flex items-center  px-3  py-[.8rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <input
              className="appearance-none right-0 pl-12 border-black border ring-0 outline-none font-bold  w-full py-4 px-3 rounded-full  text-black leading-tight focus:outline-none"
              placeholder="Search from menu"
              value=""
            />
          </div>
        </div>
      </div>

      <div className="mt-12 bg-neutral-100 w-full">
        <ul className="flex list-none  container mx-auto py-3 space-x-6">
          {[
            "Burgers",
            "Fries",
            "Snacks",
            "Salads",
            "Cold drinks",
            "Happy Meal®",
            "Desserts",
            "Hot drinks ",
            "Sauces",
            "Orbit® ",
          ].map((item, index) => (
            <li
              onClick={() => setOfferActive(index)}
              key={index}
              className={`px-6 py-1 font-bold cursor-pointer ${
                offerActive == index ? " rounded-full bg-black text-white" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="container mx-auto mb-24">
        <div className="flex space-x-4 mt-12 mb-12">
          {discounts.map((discount) => {
            return (
              <div
                className="relative   w-full md:flex-1 h-full"
                key={discount.id}
              >
                <img
                  src={discount.avatar}
                  className="object-cover w-full rounded-xl"
                  alt=""
                />
                <div className="bg-gradient-to-tr from-black/90  absolute  to-gray-50/0 h-full w-full  top-0 rounded-xl">
                  <div className="absolute bottom-0 py-3 mb-6 w-full px-6 ">
                    <p className="text-orange-500 mb-3 font-medium">
                      {discount.branch_name}
                    </p>
                    <p className="font-bold text-lg text-white">
                      {discount.name}
                    </p>
                  </div>
                </div>

                <span className="bg-black p-5 rounded-b-2xl text-white top-0 right-3 absolute">
                  {discount.discount}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container mx-auto mb-24">
        <span className="text-4xl  font-bold flex-1 ">Burgers</span>
        <div className="flex mb-9 flex-wrap justify-between gap-2">
          {burgers.map((item) => (
            <div
              key={item.id}
              className="border rounded-[1rem] mt-6 flex p-5 w-[calc(33.33%-1rem)] shadow-md hover:shadow-sm relative
               hover:ring-2 hover:text-orange-500  ring-orange-200 cursor-pointer"
            >
              <div className="w-3/5 p-3">
                <p className="text-lg font-bold mb-3">{item.name}</p>
                <p className="text-sm text-zinc-400 mb-6">{item.description}</p>
                <p className="font-bold"> {item.price} VNĐ</p>
              </div>
              <img src={item.avatar} alt="" className="rounded-2xl w-2/5 " />

              <button className="bg-white bg-opacity-80 p-6 text-black absolute bottom-0 right-0 rounded-tl-[2rem] rounded-b-[2rem] hover:text-orange-500">
                <PlusCircleIcon className="size-12" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto mb-24">
        <span className="text-4xl  font-bold flex-1 text-orange-500 ">
          Fries
        </span>
        <div className="flex  mb-9 flex-wrap justify-between gap-2">
          {fries.map((item) => (
            <div
              key={item.id}
              className="border rounded-[1rem] mt-6 flex p-5 w-[calc(33.33%-1rem)] shadow-md hover:shadow-sm relative
               hover:ring-2 hover:text-orange-500  ring-orange-200 cursor-pointer"
            >
              <div className="w-3/5 p-3">
                <p className="text-lg font-bold mb-3">{item.name}</p>
                <p className="text-sm text-zinc-400 mb-6">{item.description}</p>
                <p className="font-bold"> {item.price} VNĐ</p>
              </div>
              <img src={item.avatar} alt="" className="rounded-2xl w-2/5" />

              <button className="bg-white bg-opacity-80 p-6 text-black absolute bottom-0 right-0 rounded-tl-[2rem] rounded-b-[2rem] hover:text-orange-500">
                <PlusCircleIcon className="size-12" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto mb-24">
        <span className="text-4xl  font-bold flex-1 text-orange-500 ">
          Drinks
        </span>
        <div className="flex  mb-9 flex-wrap justify-between gap-2">
          {drinks.map((item) => (
            <div
              key={item.id}
              className="border rounded-[1rem] mt-6 flex p-5 w-[calc(33.33%-1rem)] shadow-md hover:shadow-sm relative
               hover:ring-2 hover:text-orange-500  ring-orange-200 cursor-pointer"
            >
              <div className="w-3/5 p-3">
                <p className="text-lg font-bold mb-3">{item.name}</p>
                <p className="text-sm text-zinc-400 mb-6">{item.description}</p>
                <p className="font-bold"> {item.price} VNĐ</p>
              </div>
              <img src={item.avatar} alt="" className="rounded-2xl w-2/5" />

              <button className="bg-white bg-opacity-80 p-6 text-black absolute bottom-0 right-0 rounded-tl-[2rem] rounded-b-[2rem] hover:text-orange-500">
                <PlusCircleIcon className="size-12" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto mb-24">
        <div className="flex flex-col md:flex-row bg-zinc-300 space-y-6 md:space-y-0 md:space-x-6 shadow-md rounded-xl">
          {/* Delivery Information */}
          <SectionCard
            icon={<img className="size-9" src="/public/Tracking.svg" />}
            title="Delivery information"
            content={
              <div>
                <ul className="space-y-2">
                  <li>
                    <strong>Monday:</strong> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM
                  </li>
                  <li>
                    <strong>Tuesday:</strong> 8:00 AM–3:00 AM
                  </li>
                  <li>
                    <strong>Wednesday:</strong> 8:00 AM–3:00 AM
                  </li>
                  <li>
                    <strong>Thursday:</strong> 8:00 AM–3:00 AM
                  </li>
                  <li>
                    <strong>Friday:</strong> 8:00 AM–3:00 AM
                  </li>
                  <li>
                    <strong>Saturday:</strong> 8:00 AM–3:00 AM
                  </li>
                  <li>
                    <strong>Sunday:</strong> 8:00 AM–12:00 AM
                  </li>
                </ul>
                <p className="mt-4">
                  <strong>Estimated time until delivery:</strong> 20 min
                </p>
              </div>
            }
          />

          {/* Contact Information */}
          <SectionCard
            icon={<img className="size-9" src="/public/ID Verified.svg" />}
            title="Contact information"
            content={
              <div>
                <p>
                  If you have allergies or other dietary restrictions, please
                  contact the restaurant. The restaurant will provide
                  food-specific information upon request.
                </p>
                <p className="mt-4">
                  <strong>Phone number:</strong> 
                  <p className="py-3 text-xl">+934443-43</p>
                  
                </p>
                <p>
                  <strong>Website:</strong>
                  <p className="py-3">
                    
                    <a
                      href="http://mcdonalds.uk/"
                      className="text-blue-600 py-12 text-xl hover:underline"
                    >
                      http://mcdonalds.uk/
                    </a>
                  </p>
                </p>
              </div>
            }
          />

          {/* Operational Times */}
          <SectionCard
            customClasses="bg-black text-white rounded-r-xl "
            icon={<img className="size-9" src="/public/Clock.png" />}
            title="Operational Times"
            content={
              <ul className="space-y-2 text-white">
                <li>
                  <strong>Monday:</strong> 8:00 AM–3:00 AM
                </li>
                <li>
                  <strong>Tuesday:</strong> 8:00 AM–3:00 AM
                </li>
                <li>
                  <strong>Wednesday:</strong> 8:00 AM–3:00 AM
                </li>
                <li>
                  <strong>Thursday:</strong> 8:00 AM–3:00 AM
                </li>
                <li>
                  <strong>Friday:</strong> 8:00 AM–3:00 AM
                </li>
                <li>
                  <strong>Saturday:</strong> 8:00 AM–3:00 AM
                </li>
                <li>
                  <strong>Sunday:</strong> 8:00 AM–3:00 AM
                </li>
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
