import React, { useState } from "react";

const Footer: React.FC = () => {

  const [value, setValue] = useState("");

  const handleChange = (e: { target: { value: any; }; }) => {
    // Đảm bảo chỉ nhập số
    const newValue = e.target.value;
    setValue(newValue);
  };
  return (
    <>
      <div className="bg-zinc-100 flex space-x-12 p-12 pt-24 bottom-0 relative">
        <div className="flex-1">
          <img src="/logo-2.svg" alt="" />
          <img src="/app-store-badges-en 1.png" alt="" className="w-96 my-12" />
          <p>Company # 490039-445, Registered with</p>
          <p>House of companies.</p>
        </div>

        <div className="flex-1 px-12">
          <p className="font-bold px-6">Get Exclusive Deals in your Inbox</p>
          <div className="relative rounded-md shadow-sm mt-4 mb-4">
            <input
              className="appearance-none right-0 bg-slate-200 ring-orange-300 border ring-0 outline-none  w-full py-5 px-6 rounded-full  text-gray-700 leading-tight focus:outline-none"
              placeholder="youremail@gmail.com"
              value={value}
              onChange={handleChange}
            />
            <div className=" cursor-pointer hover:ring-4 hover:ring-orange-200  rounded-full text-white  absolute -bottom-0 -right-1 flex items-center bg-orange-500 px-12  py-[1.2rem]">
            Subscribe
            </div>
          </div>
          <span className="px-6"> we wont spam, read our email policy </span>

          <div className="flex w-80 py-6 space-x-6">
            <img src="/Facebook.svg" alt="" className="flex-1" />
            <img src="/Instagram.svg" alt="" className="flex-1" />
            <img src="/Snapchat.svg" alt="" className="flex-1" />
            <img src="/TikTok.svg" alt="" className="flex-1" />
          </div>
        </div>
        <div className="flex p-3 py-6 space-x-12 flex-1">
          <div>
            <span className=" font-bold">Legal Pages</span>
            <ul className="list-none">
              <li className="py-3 underline">
                {" "}
                <a href="#">Terms and conditions</a>
              </li>
              <li className="py-3 underline">
                {" "}
                <a href="#">Privacy</a>
              </li>
              <li className="py-3 underline">
                {" "}
                <a href="#">Cookies</a>
              </li>
              <li className="py-3 underline">
                {" "}
                <a href="#">Modern Slavery Statement</a>
              </li>
            </ul>
          </div>
          <div>
            <span className=" font-bold">Important Links</span>
            <ul className="list-none">
              <li className="py-3 underline">
                {" "}
                <a href="#">Get help</a>
              </li>
              <li className="py-3 underline">
                {" "}
                <a href="#">Add your restaurant</a>
              </li>
              <li className="py-3 underline">
                {" "}
                <a href="#">Sign up to deliver</a>
              </li>
              <li className="py-3 underline">
                {" "}
                <a href="#">Create a business account</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 p-6  w-full  text-white flex justify-between">
        <span>Order.uk Copyright 2024, All Rights Reserved.</span>

        <ul className="list-none space-x-12 flex">
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li>Pricing</li>
          <li>Do not sell or share my personal information</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
