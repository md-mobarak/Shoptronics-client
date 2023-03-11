import React, { useContext } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { cardContext } from "../../App";
import Banner from "./Banner";
import BestSelling from "./BestSelling";
import Card from "./Card";
import EnhanceMusic from "./EnhanceMusic";
import Logo from "./Logo";

const Home = () => {
  const useCard = useContext(cardContext);
  // const navigate = useNavigate();
  // const handleNavigate = () => {
  //   navigate("/shop");
  // };
  return (
    <div>
      <div className="lg:w-full lg:overflow-hidden px-10 lg:px-0 lg:my-10 my-5">
        <Banner></Banner>
      </div>
      <div className="lg:px-10 px-8">
        <div>
          <h1 className="lg:text-5xl text-2xl font-semibold lg:font-bold font-serif lg:ml-20 lg:mt-20 lg:mb-10">
            TREDING PRODUCTS
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 ">
            {useCard?.slice(0, 3)?.map((product) => (
              <Card product={product}></Card>
            ))}
          </div>
          <div className="flex justify-end lg:mr-10 lg:my-10 my-4 mr-5">
            <BsFillArrowRightCircleFill className="text-primary lg:text-[40px] text-3xl font-bold "></BsFillArrowRightCircleFill>
          </div>
        </div>
        <div>
          <EnhanceMusic></EnhanceMusic>
        </div>
        <div>
          {/* <marquee scrollamount="20"> */}
          <BestSelling></BestSelling>
          {/* </marquee> */}
        </div>
        <div className="lg:my-12">
          <Logo></Logo>
        </div>
      </div>
    </div>
  );
};

export default Home;
