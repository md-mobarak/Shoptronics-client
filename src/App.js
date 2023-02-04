import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      {/* <Home></Home>
      <Footer></Footer> */}
    </div>
  );
}

export default App;
