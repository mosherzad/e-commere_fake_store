import { useContext, useState, useEffect, useMemo } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
const Home = () => {
  const { products } = useContext(ProductContext);

  const allProduct = useMemo(() => {
    return products.filter((item) =>
      ["men's clothing", "women's clothing", "jewelery"].includes(item.category)
    );
  }, [products]);

  const [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory(allProduct);
  }, [allProduct]);

  const menProduct = products.filter((item) => {
    return item.category === "men's clothing";
  });
  const womenProduct = products.filter((item) => {
    return item.category === "women's clothing";
  });

  const JeweleryProduct = products.filter((item) => {
    return item.category === "jewelery";
  });

  const [active, setActive] = useState("All");

  const baseStyle =
    "relative text-[20px] hover:text-red-500 font-semibold cursor-pointer transition-all duration-300 pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:bg-pink-600 after:text-pink-600 after:transition-all after:duration-300";
  return (
    <div>
      <Hero />
      <div className="flex items-center justify-center gap-x-7 mt-5 w-[300px] mx-auto">
        <button
          onClick={() => {
            setCategory(allProduct);
            setActive("All");
          }}
          className={`${baseStyle} ${
            active === "All" ? "after:w-full text-red-500" : "after:w-0"
          }`}
        >
          All
        </button>
        <button
          onClick={() => {
            setCategory(menProduct);
            setActive("Men");
          }}
          className={`${baseStyle} ${
            active === "Men" ? "after:w-full text-red-500" : "after:w-0"
          }`}
        >
          Men
        </button>
        <button
          onClick={() => {
            setCategory(womenProduct);
            setActive("Women");
          }}
          className={`${baseStyle} ${
            active === "Women" ? "after:w-full text-red-500" : "after:w-0"
          }`}
        >
          Woman
        </button>
        <button
          onClick={() => {
            setCategory(JeweleryProduct);
            setActive("Jewelery");
          }}
          className={`${baseStyle} ${
            active === "Jewelery" ? "after:w-full text-red-500" : "after:w-0"
          }`}
        >
          Jewelery
        </button>
      </div>
      <section className="py-13">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {category.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
