import React from "react";
import restaurantMenu from "/Restaurant Menu.png";
interface MenuListProps {
  items: string[];
  selectedIndex?: number;
  onSelect?: (index: number) => void;
}

const MenuList: React.FC<MenuListProps> = ({
  items,
  selectedIndex,
  onSelect,
}) => {
  return (
    <div className="w-full max-w-xs bg-zinc-100 border border-gray-300 rounded-lg shadow-md">
      <p className="flex p-12 items-center justify-center">
        <img src={restaurantMenu} alt="" className="size-12" />
        <span className="pl-3 font-bold text-3xl">Menu</span>
      </p>
      <ul className="">
        {items.map((item, index) => (
          <li
            key={index}
            className={`p-4 text-lg font-bold cursor-pointer ${
              selectedIndex === index
                ? "bg-zinc-900 text-white"
                : "hover:bg-gray-100"
            }`}
            onClick={() => onSelect && onSelect(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
