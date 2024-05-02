import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className="fixed top-0 w-full h-20 flex flex-row bg-custom-blue text-white justify-around items-center">
      <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mx-4 cursor-pointer" onClick={()=>navigate('/')}>
        Shop
        <span className="text-custom-orange">Zone</span>
      </h1>
      <ul className="flex flex-row justify-evenly font-bold text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl mx-4">
        <li className="mr-2 cursor-pointer hover:opacity-80 sm:mr-4 lg:mr-6" onClick={()=>navigate('/product')}>
          Products
        </li>
        <li className="mr-2 cursor-pointer hover:opacity-80 sm:mr-4 lg:mr-6">
          Contact
        </li>
        <li className="mr-2 cursor-pointer hover:opacity-80 sm:mr-4 lg:mr-6">
          About
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
