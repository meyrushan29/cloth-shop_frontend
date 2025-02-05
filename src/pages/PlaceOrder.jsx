import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);

  const PaymentMethod = ({ type, logo, label }) => (
    <div
      onClick={() => setMethod(type)}
      className="w-full lg:w-auto"
    >
      <div className="flex items-center gap-3 border rounded-md p-3 cursor-pointer hover:border-gray-400 transition-colors">
        <div className={`w-4 h-4 border rounded-full flex items-center justify-center ${
          method === type ? "border-green-500" : "border-gray-300"
        }`}>
          {method === type && <div className="w-2 h-2 bg-green-500 rounded-full" />}
        </div>
        {logo ? (
          <img className="h-6" src={logo} alt={`${type} logo`} />
        ) : (
          <p className="text-gray-700 font-medium">{label}</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side - Delivery Information */}
        <div className="flex-1">
          <div className="mb-6">
            <Title text1="DELIVERY" text2="INFORMATION" />
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-200"
                type="text"
                placeholder="First name"
              />
              <input
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-200"
                type="text"
                placeholder="Last name"
              />
            </div>
            
            <input
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-200"
              type="email"
              placeholder="Email Address"
            />
            
            <input
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-200"
              type="text"
              placeholder="Street"
            />
            
            <div className="grid grid-cols-2 gap-4">
              <input
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-200"
                type="text"
                placeholder="City"
              />
              <input
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-200"
                type="text"
                placeholder="State"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <input
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-200"
                type="number"
                placeholder="Zip Code"
              />
              <input
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-200"
                type="text"
                placeholder="Country"
              />
            </div>
            
            <input
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-200"
              type="tel"
              placeholder="Phone"
            />
          </div>
        </div>

        {/* Right Side - Payment Information */}
        <div className="lg:w-[400px]">
          <div className="mb-8">
            <CartTotal />
          </div>

          <div className="mb-6">
            <Title text1="PAYMENT" text2="METHOD" />
          </div>

          <div className="space-y-3">
            <PaymentMethod type="stripe" logo={assets.stripe_logo} />
            <PaymentMethod type="razorpay" logo={assets.razorpay_logo} />
            <PaymentMethod type="cod" label="CASH ON DELIVERY" />
          </div>

          <button
            onClick={() => navigate("/orders")}
            className="w-full mt-8 bg-black hover:bg-gray-800 text-white py-3 rounded-md transition-colors"
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;