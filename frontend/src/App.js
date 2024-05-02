import Navbar from "./compnents/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import Products from "./Pages/Products/Products";
import AdminPage from "./Pages/AdminPage/AdminPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mt-20">
        {" "}
        {/* Add margin-top to create space for the navbar */}
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/product" exact element={<Products />} />
          <Route path="/admin" exact element={<AdminPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
