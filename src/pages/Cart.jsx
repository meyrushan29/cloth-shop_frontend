import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

import Title from '../components/Title';
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems , updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          tempData.push({
            _id: productId,
            size: size,
            quantity: cartItems[productId][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);
  

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {cartData.length > 0 ? (
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);

            if (!productData) return null; // Prevents error if productData is undefined

            return (
              <div key={index} className="py-4 border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
                <div className="flex items-start gap-6">
                  <img className="w-16 sm:w-20" src={productData.image[0]} alt={productData.name} />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                    <p className="text-sm">Size: {item.size} | Qty: {item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-5 mt-2">
                    <p className="">{currency}{productData.price}</p>
                  </div>
                </div>
                {/* Corrected the placement of the input field inside the map */}
                <input onChange={(e)=>e.target.value === ''|| e.target.value === '0' ? null : updateQuantity(item._id,item.size,Number(e.target.value))  } className="border w-10 sm:w-20 px-1 sm:px-2 py-1" type="number" min={1} defaultValue={item.quantity} />
                <img onClick={()=>updateQuantity(item._id,item.size)} className=" w-4 mr-4 sm:w-5 cursor-pointer" src={assets.bin_icon} alt="" />
              </div>
            );
          })
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>
      <div className=" flex justify-end my-20">
        <div className=" w-full sm:w-[450px]">
          <CartTotal/>
        </div>
      </div>
    </div>
  );
};

export default Cart;
