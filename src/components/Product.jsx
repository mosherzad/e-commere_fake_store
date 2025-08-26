import React, { useContext } from "react";
import { Form, Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import { CardContext } from "../contexts/CardContext";
const Product = ({ product }) => {
  const { id, title, category, price, image } = product;
  const { addToCard } = useContext(CardContext);
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] flex justify-center items-center ">
            {" "}
            <img
              className="max-h-[160px] group-hover:scale-110 transition-all duration-200"
              src={image}
              alt=""
            />
          </div>
        </div>

        <div className="absolute top-5 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCard(product, id)}>
            <div className="flex justify-center items-center bg-red-500 text-white w-12 h-12">
              <BsPlus className="text-2xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="h-12 w-12 flex bg-white justify-center items-center drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <h2 className="font-semibold ">$ {price}</h2>
      </div>
    </div>
  );
};

export default Product;
