import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
      {/* mobile responsive navbar */}
      <nav className=" lg:hidden">
        <div className="w-full px-5 py-3 flex justify-between">
          <h1 className="text-3xl text-primary">
            Shop<span className="font-semibold">tronics</span>
          </h1>
          <div className="flex  items-center">
            <section className="relative">
              <span class="indicator-item badge badge-primary w-1 text-[10px] font-bold absolute bottom-4 left-4">
                99
              </span>
              <AiOutlineShoppingCart className="h-[24px] w-[24px] "></AiOutlineShoppingCart>
            </section>
            <AiOutlineUser className="h-[24px] w-[24px] mx-4"></AiOutlineUser>

            <button onClick={() => setToggleMenu(!toggleMenu)}>
              {toggleMenu ? (
                <RxCross1 className="h-[24px] w-[24px]"></RxCross1>
              ) : (
                <RxHamburgerMenu className="h-[24px] w-[24px]"></RxHamburgerMenu>
              )}
            </button>
          </div>
        </div>
        {toggleMenu && (
          <div
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            className="flex justify-center bg-primary"
          >
            <ul>
              <li className="font-semibold text-white">Home</li>
              <li className="font-semibold text-white">Shop</li>
              <li className="font-semibold text-white">About</li>
              <li className="font-semibold text-white">Contact</li>
            </ul>
          </div>
        )}
      </nav>

      {/* destop and tablet responsive  */}
      <div className="hidden lg:block">
        <nav className="flex justify-evenly items-center h-[100px]">
          <h1 className="text-3xl text-primary">
            Shop<span className="font-semibold">tronics</span>
          </h1>
          <span>
            <span className="relative">
              <BsSearch className="absolute top-1 left-3 font-bold"></BsSearch>
            </span>
            <input
              className="focus:outline-none w-[607px] h-[45px] border border-primary text-center"
              autocomplete="off"
              type="search"
              name="SEARCH"
              id=""
              placeholder="Search for products"
            />
            <button className="bg-primary w-[189px] h-[45px] font-semibold text-white">
              SEARCH
            </button>
          </span>
          <div className="flex justify-evenly items-center">
            <section className="relative">
              <span class="indicator-item badge badge-primary w-2 text-[10px] font-bold absolute bottom-4 left-4">
                99
              </span>
              <AiOutlineShoppingCart className="h-[28px] w-[28px] mr-7"></AiOutlineShoppingCart>
            </section>
            <AiOutlineUser className="h-[28px] w-[28px]"></AiOutlineUser>
          </div>
        </nav>

        {/* 2nd navbar  */}
        <nav className="w-[700px] ml-[120px] ">
          <ul className="flex justify-evenly">
            <li className="flex items-center font-semibold">
              <RxHamburgerMenu className="mr-3"></RxHamburgerMenu>
              Departments
              <IoIosArrowDown className="mt-2"></IoIosArrowDown>
            </li>
            <li className="font-semibold">Home</li>
            <li className="font-semibold">Shop</li>
            <li className="font-semibold">About</li>
            <li className="font-semibold">Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
