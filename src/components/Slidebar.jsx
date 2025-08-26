import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash } from "react-icons/fi";
import CardItem from "./CardItem";
import { SlidebarContext } from "../contexts/SlidebarContext";
import { CardContext } from "../contexts/CardContext";
const SlideBar = () => {
  const { openSlidebar, handleClose } = useContext(SlidebarContext);
  const { card, clearCard, totalPrice, itemAmount } = useContext(CardContext);
  console.log(totalPrice);
  return (
    <div
      className={`${
        openSlidebar ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className=" flex flex-col gap-y-2 py-2 mt-1 h-[450px]  overflow-y-auto overflow-x-hidden border-b">
        {card.map((item) => {
          return <CardItem key={item.id} item={item} />;
        })}
      </div>
      <div className="flex flex-col gap-y-1 py-4 mt-1 ">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>${" "}
            {parseFloat(totalPrice).toFixed(2)}
          </div>
          <div
            onClick={clearCard}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash />
          </div>
        </div>
        <Link
          to={"/"}
          className="bg-gray-200 flex p-4 justify-center items-center text-black w-full font-medium hover:bg-gray-300 transition-all duration-300"
        >
          View cart
        </Link>
        <Link
          to={"/"}
          className="bg-gray-800 flex p-4 justify-center items-center text-white w-full font-medium hover:bg-gray-700 transition-all duration-300"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default SlideBar;
