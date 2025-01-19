import React from "react";

interface InputGroupProps {
  icon: React.ReactNode; // Can be an SVG, icon component, or string
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; // For adding custom Tailwind classes
  label?: string;
}

const InputGroup: React.FC<InputGroupProps> = ({
  icon,
  placeholder,
  type = "text",
  value,
  onChange,
  
  className = "",
  label= "Label"
}) => {
  return (
    <div className="mb-6">
     
      <label htmlFor="" className="font-medium">{label}</label>
      <div className={`relative rounded-md shadow-sm mt-4 ${className}`}>
        {" "}
        {/* Added className prop */}
        <input
          type={type}
          className="appearance-none right-0 ring-orange-300 border ring-0 outline-none rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <div className="pointer-events-none  absolute -bottom-1 right-0 flex items-center bg-orange-500 rounded-md p-3">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default InputGroup;
