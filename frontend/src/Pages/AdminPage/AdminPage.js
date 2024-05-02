import React from "react";
import backendImage from "../../images/backend.png";

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch h-screen bg-gray-200">
      {/* Sidebar */}
      <aside className="md:w-1/4 bg-custom-blue text-gray-100 flex-shrink-0 p-6">
        <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
        <ul className="text-lg">
          <li className="py-3 flex items-center hover:bg-white hover:text-custom-orange cursor-pointer transition-colors duration-300">
            <span className="mr-3">📈</span>
            View Growth
          </li>
          <li className="py-3 flex items-center hover:bg-white hover:text-custom-orange cursor-pointer transition-colors duration-300">
            <span className="mr-3">➕</span>
            Add Product
          </li>
          <li className="py-3 flex items-center hover:bg-white hover:text-custom-orange cursor-pointer transition-colors duration-300">
            <span className="mr-3">🛠️</span>
            View Pendings
          </li>
          <li className="py-3 flex items-center hover:bg-white hover:text-custom-orange cursor-pointer transition-colors duration-300">
            <span className="mr-3">📄</span>
            Custom Pages
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="md:w-3/4 flex items-center justify-center p-6">
        <img src={backendImage} alt="Backend" className="w-full max-w-lg" />
      </div>
    </div>
  );
};

export default AdminPage;
