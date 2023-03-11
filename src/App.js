import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { createContext } from "react";
import useData from "./components/Data/useData";
import { Route, Routes } from "react-router-dom";
import Shop from "./components/Shop/Shop";
// ..
AOS.init();
export const cardContext = createContext();
function App() {
  const data = useData();
  return (
    <div className="">
      <Navbar></Navbar>
      <cardContext.Provider value={data}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
        </Routes>
      </cardContext.Provider>
      <Footer></Footer>
    </div>
  );
}

export default App;
