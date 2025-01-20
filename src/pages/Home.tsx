import React from "react";
import InputGroup from "../components/common/InputGroup";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-300 relative w-full">
      <span>Order Restaurant food, takeaway and groceries.</span>
      <p>Feast Your Senses,Fast and Fresh</p>

      <span>Enter a postcode to see what we deliver</span>

      <InputGroup className="w-96" label="" icon="Search" value="" onChange={() => 0} />
      
      <div className="absolute translate-1/2 left-1/2">
        <img src="\Untitled-1 1.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
