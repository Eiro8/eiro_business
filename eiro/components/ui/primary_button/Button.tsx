import React from "react";
import { ChildrenProp } from "@/app/models/prop.model";


const Button = ({ children }:ChildrenProp) => {
  return (
    <button className="flex items-center p-2 gap-1 justify-center rounded-full hover:bg-blue-500 hover:text-white cursor-pointer transition-all duration-200 ease-in-out shadow  bg-white text-black">
      {children}
    </button>
  );
};

export default Button;
