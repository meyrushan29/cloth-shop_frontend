import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

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
    <div className="container mx-auto p-4 lg:p-10 border-t-2 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product Images */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-y-auto sm:w-1/5">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-20 sm:w-full cursor-pointer border rounded-md"
                alt="Product Thumbnail"
              />
            ))}
          </div>
          <div className="flex-1 flex justify-center">
            <img className="w-full max-w-md rounded-md" src={image} alt="Product" />
          </div>
        </div>
        {/* Product Info */}
        <div>
          <h1 className="font-semibold text-2xl">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(4)].map((_, index) => (
              <img src={assets.star_icon} alt="star" className="w-4" key={index} />
            ))}
            <img src={assets.star_dull_icon} alt="star" className="w-4" />
            <p className="pl-2 text-sm text-gray-500">(122 reviews)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p className="font-medium">Select Size</p>
            <div className="flex gap-2 flex-wrap">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 rounded-md text-sm ${item === size ? "border-orange-500 bg-orange-100" : "bg-gray-100"}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button className="bg-black text-white px-6 py-2 text-sm rounded-md hover:bg-gray-800">ADD TO CART</button>
          <hr className="mt-8" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>✅ 100% Original Product</p>
            <p>💰 Cash On Delivery Available</p>
            <p>🔄 Easy Return & Exchange within 7 days</p>
          </div>
        </div>
      </div>
      {/* Description and Review Section */}
      <div className="mt-16">
        <div className="flex border-b">
          <button className="px-5 py-3 text-sm font-medium border-r">Description</button>
          <button className="px-5 py-3 text-sm font-medium">Reviews (122)</button>
        </div>
        <div className="p-6 text-sm text-gray-500">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident voluptatum officia quidem corporis saepe illo.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis optio reiciendis quis id porro nostrum.</p>
        </div>
      </div>
      {/* Related Products */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
