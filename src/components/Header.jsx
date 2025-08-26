import React, { useContext, useEffect, useState } from "react";
import { SlidebarContext } from "../contexts/SlidebarContext";
import { CardContext } from "../contexts/CardContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";
const Header = () => {
  const [active, setActive] = useState(false);
  const { openSlidebar, setOpenSlidebar } = useContext(SlidebarContext);
  const { itemAmount } = useContext(CardContext);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setActive(true) : setActive(false);
    });
  });
  return (
    <header
      className={`${
        active ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full ">
        <Link to={`/`}>
          <div className="ml-3">
            <img src={Logo} className="w-[40px]" />
          </div>
        </Link>
        <div
          onClick={() => setOpenSlidebar(!openSlidebar)}
          className="cursor-pointer flex relative mr-3"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-fulll flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
