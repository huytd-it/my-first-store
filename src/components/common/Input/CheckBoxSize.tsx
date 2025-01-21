import React from "react";

interface MenuListProps {}

const CheckBoxSize: React.FC<MenuListProps> = ({}) => {
  return (
    <div className="w-60 rounded-md   h-14 border bg-zinc-900  relative">
      <input
        type="checkbox"
        className="appearance-none cursor-pointer h-full  w-full p-3"
      />
      <span className="top-2 font-bold  p-2 text-white left-2 absolute">
        {" "}
        Small
      </span>
      <span className="bg-green-700 rounded-md absolute font-medium text-white right-2 top-2 p-2">
        150.000 VNĐ
      </span>
    </div>
  );
};

export default CheckBoxSize;
