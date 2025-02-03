import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const fetchProductData = () => {
      const product = products.find((item) => item._id === productId);
      if (product) {
        setProductData(product);
        setImage(product.image[0]);
      }
    };
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className=" flex border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-8 sm:gap-8 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex gap-2 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[15%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-2 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="flex-1">
            <img className="w-[80%] h-auto" src={image} alt="" />
          </div>
        </div>
      </div>
      {/* Product Info */}
      <div className="flex-1">
        <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
        <div className="flex items-center gap-1 mt-2">
          {[...Array(4)].map((_, index) => (
            <img src={assets.star_icon} alt="" className="w-3" key={index} />
          ))}
          <img src={assets.star_dull_icon} alt="" className="w-3" />
          <p className="pl-2">(122)</p>
        </div>
        <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
        <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
        <div className="flex flex-col gap-4 my-8">
          <p>Select Size</p>
          <div className="flex gap-2">
            {productData.sizes.map((item, index) => (
              <button
                onClick={() => setSize(item)}
                className={`border py-2 px-4 bg-gray-100 ${item === size ? "border-orange-500" : ""}`}
                key={index}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <button className="bg-black text-white px-6 py-2 text-sm active:bg-gray-700">
          ADD TO CART
        </button>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
