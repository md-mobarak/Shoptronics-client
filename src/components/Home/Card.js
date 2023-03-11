import React, { useContext, useState } from "react";
import {
  BsArrowRightCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const Card = ({ product }) => {
  const { name, imgURL, price } = product;
  const [viewDetails, setViewDetails] = useState(false);

  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isPrice, setIsPrice] = useState(false);
  const handleMouseEnter = () => {
    setIsButtonVisible(true);
    setIsPrice(true);
  };

  const handleMouseLeave = () => {
    setIsButtonVisible(false);
    setIsPrice(false);
  };
  const handleviewDetails = () => {
    setViewDetails(!viewDetails);
  };
  return (
    <div>
      <div
        className="relative lg:shadow-2xl shadow-lg rounded-xl p-8 w-full lg:h-96 h-auto "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div class="">
          {isButtonVisible && (
            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              class=" absolute bottom-32 left-40 bg-primary hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 backdrop-blur-md backdrop-opacity-50 border-2 border-white border-opacity-50 text-opacity-80 font-serif"
            >
              Add to Cart
            </button>
          )}
        </div>

        <div className="flex justify-center items-center">
          <img className="w-72 h-72 " src={imgURL} alt="" />
        </div>
        {isPrice && (
          <p
            className=" absolute top-5 left-28  z-40 lg:text-3xl text-xl font-bold font-serif"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Price$ {price}
          </p>
        )}

        <div className="flex justify-around items-center">
          <h3 className="text-center text-xl  font-serif">{name}</h3>
          <button
            className="btn btn-outline btn-primary btn-xs hover:text-white"
            onClick={handleviewDetails}
          >
            DETAILS
          </button>
        </div>
      </div>
      <section className="flex justify-center items-center p-10 lg:p-0 ">
        {viewDetails && (
          <div
            className=" fixed lg:top-4 top-2   lg:right-96 z-40 w-full h-full lg:w-[500px] lg:h-[500px] bg-white  rounded-2xl p-10 shadow-2xl"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div className="flex justify-end">
              <button className="" onClick={handleviewDetails}>
                <RxCross2 className="text-red-500 w-10 h-10"></RxCross2>
              </button>
            </div>
            <div className="flex justify-center items-center ">
              <img
                className="lg:w-80 lg:h-80 w-64 h-64 rounded-2xl"
                src={imgURL}
                alt=""
              />
            </div>
            <div>
              <button
                data-aos="fade-up"
                data-aos-duration="1000"
                class=" absolute lg:bottom-24 lg:left-40 bg-primary hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 backdrop-blur-md backdrop-opacity-50 border-2 border-white border-opacity-50 text-opacity-80 font-serif"
              >
                Add to Cart
              </button>
              <p>
                <span className="font-bold text-primary ">Description</span>:
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                culpa totam placeat, non eveniet iure deserunt aliquam
                perferendis blanditiis ad...
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Card;
