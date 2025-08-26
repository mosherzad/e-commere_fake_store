import React from "react";
import WomanImg from "../assets/images/man_hero.png";
import { Link } from "react-router-dom";
import BgHero from "../assets/images/bg_hero.svg";
const Hero = () => {
  return (
    <section
      className={`h-[800px] bg-cover bg-center bg-no-repeat py-24`}
      style={{ backgroundImage: `url(${BgHero})` }}
    >
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div> New Trend
          </div>
          <h1 className=" text-[70px] leading-[1.1] font-light mb-4">
            AUTUMAN SALE STYLISH <br />{" "}
            <span className="font-semibold">MEN'S</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-black"
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={WomanImg} width={"650px"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
