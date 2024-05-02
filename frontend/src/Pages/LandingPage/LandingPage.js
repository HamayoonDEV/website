import React, { useState } from "react";
import cartImage from "../../images/cartpic.avif";

const LandingPage = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-custom-blue flex flex-col md:flex-row h-screen justify-center">
      <div className=" p-8 md:w-1/2 flex justify-center items-center">
        <div>
          <h1 className="text-lg xl:text-5xl md:text-3xl font-bold mb-4 text-white">
            Discover Your Priceless Shopping Moments
          </h1>
          <input
            type="text"
            placeholder="Search here..."
            className="bg-white rounded-full px-4 py-2 mb-4 w-full md:w-auto"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-custom-orange text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors duration-300 ml-6">
            Shop Now
          </button>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <img
          src={cartImage}
          alt="Shopping"
          className=" w-full h-auto rounded-15px"
        />
      </div>
    </div>
  );
};

export default LandingPage;
