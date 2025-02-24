import React, { useState } from "react";
import MenuList from "../components/common/MenuList";
import CheckBoxSize from "../components/common/Input/CheckBoxSize";

const Order: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const menuItems = [
    "Pizzas",
    "Garlic Bread",
    "Calzone",
    "Kebabas",
    "Salads",
    "Cold drinks",
    "Happy Meal®",
    "Desserts",
    "Hot desserts",
    "Sauces",
    "Orbit®",
  ];
  return (
    <div className="container mx-auto">
      <div
        className="bg-cover  bg-center flex rounded-xl relative container mx-auto"
        style={{ backgroundImage: "url('/public/Rectangle 44.png')" }}
      >
        <div className="w-full bg-opacity-70 items-center bg-zinc-200 rounded-xl flex h-[30rem]">
          <div className="flex-1 p-12 ">
            <p className="mb-3">
              Desi Flavours with a blend of Italian aesthetics!
            </p>
            <p className="font-bold pb-6 text-5xl">Tandoori Pizza London</p>

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
            <img src="/public/pizza-girl.png" alt="" className=" w-[37rem]" />
          </div>
        </div>

        <button className="bg-orange-400 flex text-white px-6 py-2 rounded-r-lg justify-center items-center space-x-2 absolute -bottom-3">
          <img src="/public/Clock.svg" alt="" />

          <span>Open until 3:00 AM</span>
        </button>
      </div>
      <div className="mt-12 px-12">
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

      <div className="my-12 flex">
        <div className="w-1/5">
          <MenuList
            items={menuItems}
            selectedIndex={selectedIndex ?? undefined}
            onSelect={(index) => setSelectedIndex(index)}
          />
        </div>
        <div className="w-3/5">
          <p className="flex p-12 items-center">
            <span className="pl-6 font-bold text-3xl">Menu</span>
          </p>

          <div className="flex flex-wrap space-y-3 gap-3">
            {/** Items */}
            <div className="flex border mx-3 w-full shadow-lg rounded-xl">
              <div className="flex pt-12 px-6 flex-wrap">
                <div className="w-2/5">
                  <p className="font-bold text-2xl">Farm House Xtreme Pizza</p>
                  <p className="text-md text-gray-500 py-6 mt-14">
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                    sized French Fries , 3 cold drinks
                  </p>
                </div>
                <div className="w-3/5 flex justify-end">
                  <img
                    src="/public/pizza.png"
                    alt=""
                    className="w-56 rounded-full"
                  />
                </div>
                <div className="flex w-5/6 flex-wrap mb-12 ">
                  <div className=" rounded-md px-3 py-2 mr-3  mt-3 border-2 flex items-center">
                    <span className=" font-bold mr-6  ">
                      Small
                    </span>
                    <span className="bg-green-700 rounded-sm  font-medium text-white  p-2">
                      150.000 VNĐ
                    </span>
                  </div>
                  <div className=" rounded-md px-3 py-2 mr-3 mt-3 border-2  flex items-center">
                    <span className=" font-bold mr-6  ">
                      Medium
                    </span>
                    <span className="bg-green-700 rounded-sm  font-medium text-white  p-2">
                      150.000 VNĐ
                    </span>
                  </div>
                  <div className=" rounded-md px-3 py-2 mr-3 mt-3 bg-zinc-900 flex items-center">
                    <span className=" font-bold mr-6 text-white ">
                      Large
                    </span>
                    <span className="bg-green-700 rounded-sm  font-medium text-white  p-2">
                      150.000 VNĐ
                    </span>
                  </div>
                  <div className=" rounded-md px-3 py-2 mr-3 mt-3 border-2 flex items-center">
                    <span className=" font-bold mr-6 text-black ">
                    XL Large with Sauces
                    </span>
                    <span className="bg-green-700 rounded-sm  font-medium text-white  p-2">
                      150.000 VNĐ
                    </span>
                  </div>
       
       
                </div>
              </div>
            </div>
            <div className="flex border mx-3 w-full shadow-lg">
              <div className="flex pt-12 px-6 flex-wrap">
                <div className="w-2/5">
                  <p className="font-bold text-2xl">Farm House Xtreme Pizza</p>
                  <p className="text-md text-gray-500 py-6 mt-14">
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                    sized French Fries , 3 cold drinks
                  </p>
                </div>
                <div className="w-3/5 flex justify-end">
                  <img
                    src="/public/pizza.png"
                    alt=""
                    className="w-56 rounded-full"
                  />
                </div>
                <div className="flex w-5/6 flex-wrap mb-12 ">
                  <div className=" rounded-md px-3 py-2 mr-3  mt-3 border-2 flex items-center">
                    <span className=" font-bold mr-6  ">
                      Small
                    </span>
                    <span className="bg-green-700 rounded-sm  font-medium text-white  p-2">
                      150.000 VNĐ
                    </span>
                  </div>
                  <div className=" rounded-md px-3 py-2 mr-3 mt-3 border-2  flex items-center">
                    <span className=" font-bold mr-6  ">
                      Medium
                    </span>
                    <span className="bg-green-700 rounded-sm  font-medium text-white  p-2">
                      150.000 VNĐ
                    </span>
                  </div>
                  <div className=" rounded-md px-3 py-2 mr-3 mt-3 bg-zinc-900 flex items-center">
                    <span className=" font-bold mr-6 text-white ">
                      Large
                    </span>
                    <span className="bg-green-700 rounded-sm  font-medium text-white  p-2">
                      150.000 VNĐ
                    </span>
                  </div>
                  <div className=" rounded-md px-3 py-2 mr-3 mt-3 border-2 flex items-center">
                    <span className=" font-bold mr-6 text-black ">
                    XL Large with Sauces
                    </span>
                    <span className="bg-green-700 rounded-sm  font-medium text-white  p-2">
                      150.000 VNĐ
                    </span>
                  </div>
       
       
                </div>
              </div>
            </div>
            <div className="flex border mx-3 w-full shadow-lg">
              <div className="flex pt-12 px-6 flex-wrap">
                <div className="w-2/5">
                  <p className="font-bold text-2xl">Farm House Xtreme Pizza</p>
                  <p className="text-md text-gray-500 py-6 mt-14">
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                    sized French Fries , 3 cold drinks
                  </p>
                </div>
                <div className="w-3/5 flex justify-end">
                  <img
                    src="/public/pizza.png"
                    alt=""
                    className="w-56 rounded-full"
                  />
                </div>
                <div className="flex w-5/6 flex-wrap mb-12 ">
                  <div className=" rounded-md px-3 py-2 mr-3  mt-3 border-2 flex items-center">
                    <span className=" font-bold mr-6  ">
                      Small
                    </span>
                    <span className="bg-green-700 rounded-sm  font-medium text-white  p-2">
                      150.000 VNĐ
                    </span>
                  </div>
                  <div className=" rounded-md px-3 py-2 mr-3 mt-3 border-2  flex items-center">
                    <span className=" font-bold mr-6  ">
                      Medium
                    </span>
                    <span className="bg-green-700 rounded-sm  font-medium text-white  p-2">
                      150.000 VNĐ
                    </span>
                  </div>
                  <div className=" rounded-md px-3 py-2 mr-3 mt-3 bg-zinc-900 flex items-center">
                    <span className=" font-bold mr-6 text-white ">
                      Large
                    </span>
                    <span className="bg-green-700 rounded-sm  font-medium text-white  p-2">
                      150.000 VNĐ
                    </span>
                  </div>
                  <div className=" rounded-md px-3 py-2 mr-3 mt-3 border-2 flex items-center">
                    <span className=" font-bold mr-6 text-black ">
                    XL Large with Sauces
                    </span>
                    <span className="bg-green-700 rounded-sm  font-medium text-white  p-2">
                      150.000 VNĐ
                    </span>
                  </div>
       
       
                </div>
              </div>
            </div>
            <div className="flex border mx-3 w-full shadow-lg">
              <div className="flex pt-12 px-6 flex-wrap">
                <div className="w-2/5">
                  <p className="font-bold text-2xl">Farm House Xtreme Pizza</p>
                  <p className="text-md text-gray-500 py-6 mt-14">
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                    sized French Fries , 3 cold drinks
                  </p>
                </div>
                <div className="w-3/5 flex justify-end">
                  <img
                    src="/public/pizza.png"
                    alt=""
                    className="w-56 rounded-full"
                  />
                </div>
                <div className="flex w-5/6 flex-wrap mb-12 ">
                  <div className=" rounded-md px-3 py-2 mr-3  mt-3 border-2 flex items-center">
                    <span className=" font-bold mr-6  ">
                      Small
                    </span>
                    <span className="bg-green-700 rounded-sm  font-medium text-white  p-2">
                      150.000 VNĐ
                    </span>
                  </div>
                  <div className=" rounded-md px-3 py-2 mr-3 mt-3 border-2  flex items-center">
                    <span className=" font-bold mr-6  ">
                      Medium
                    </span>
                    <span className="bg-green-700 rounded-sm  font-medium text-white  p-2">
                      150.000 VNĐ
                    </span>
                  </div>
                  <div className=" rounded-md px-3 py-2 mr-3 mt-3 bg-zinc-900 flex items-center">
                    <span className=" font-bold mr-6 text-white ">
                      Large
                    </span>
                    <span className="bg-green-700 rounded-sm  font-medium text-white  p-2">
                      150.000 VNĐ
                    </span>
                  </div>
                  <div className=" rounded-md px-3 py-2 mr-3 mt-3 border-2 flex items-center">
                    <span className=" font-bold mr-6 text-black ">
                    XL Large with Sauces
                    </span>
                    <span className="bg-green-700 rounded-sm  font-medium text-white  p-2">
                      150.000 VNĐ
                    </span>
                  </div>
       
       
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/5">
          <MenuList
            items={menuItems}
            selectedIndex={selectedIndex ?? undefined}
            onSelect={(index) => setSelectedIndex(index)}
          />
        </div>
      </div>
    </div>
  );
};

export default Order;
