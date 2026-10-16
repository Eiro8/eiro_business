import React from "react";
import { ChildrenProp } from "@/app/models/prop.model";

interface ButtonProp extends ChildrenProp {
  [key: string]: unknown;
}

const Button = ({ children }: ButtonProp) => {
  return (
    <button className="flex items-center p-2 gap-1 justify-center rounded-full hover:bg-blue-500 hover:text-white cursor-pointer transition-all duration-200 ease-in-out drop-shadow-lg  bg-white text-black">
      {children}
    </button>
  );
};

export { Button };

const SecondaryButton = ({ children }: ButtonProp) => {
  return (
    <button className="flex items-center p-3 gap-1 justify-center rounded-sm hover:bg-white hover:text-black cursor-pointer transition-all duration-300 ease-in-out shadow border-white border-2  bg-transparent text-white hover:">
      <span className="flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};

export { SecondaryButton };

const TertiaryButton = ({ children, ...props }: ButtonProp) => {
  return (
    <button
      {...props}
      className="flex items-center p-2.5 gap-2 justify-center rounded-sm cursor-pointer pointer-events-auto transition-all duration-200 ease-in-out shadow  bg-transparent text-white hover:bg-white/5 "
    >
      {children}
    </button>
  );
};

export { TertiaryButton };
