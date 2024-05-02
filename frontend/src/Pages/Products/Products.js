import React from "react";
import rice from "../../images/riceImage.jpeg";
import sugar from "../../images/sugarimage.jpeg";
import toothpaste from "../../images/toothpasteImage.jpeg";
import tea from "../../images/teaImage.jpeg";
import bisc from "../../images/biscuteImage.jpeg";
import cake from "../../images/cakeImage.jpg";
import choco from "../../images/chocolateImage.jpg";
import wafer from "../../images/waferImage.jpeg";

const Products = () => {
  // Function to generate random prices
  const generateRandomPrice = () => {
    return Math.floor(Math.random() * (500 - 50) + 50); // Generate random price between 50 and 500
  };

  // Object mapping product names to their images
  const products = {
    Cake: cake,
    Biscuits: bisc,
    Wafer: wafer,
    Chocolates: choco,
    Tea: tea,
    Sugar: sugar,
    Toothpaste: toothpaste,
    Rice: rice,
  };

  // Array of product names
  const productNames = Object.keys(products);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productNames.map((productName) => (
          <div
            key={productName}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={products[productName]}
              alt={productName}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-gray-800 text-lg font-semibold mb-2">
                {productName}
              </h2>
              <p className="text-gray-600 text-sm">
                Looking for a good essay, research or speech topic on{" "}
                {productName.toLowerCase()}
              </p>
              <p className="text-gray-700 text-base mt-2">Rating: ⭐️⭐️⭐️</p>
              {/* Display random price if product doesn't have a price */}
              {!productName.includes("Price") && (
                <h4>Price: Rs {generateRandomPrice()}</h4>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
