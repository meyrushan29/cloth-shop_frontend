import { useContext } from "react";
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';


const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="container mx-auto px-4 border-t pt-8 md:pt-16">
      <div className="mb-8">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      
      <div className="space-y-6">
        {products.slice(1, 4).map((item, index) => (
          <div 
            key={index} 
            className="border rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Product Details Section */}
              <div className="flex gap-6">
                <div className="relative">
                  <img 
                    src={item.image[0]} 
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md" 
                    alt={item.name}
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  
                  <div className="mt-3 space-y-2">
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <p className="font-medium text-gray-900">
                        {currency}{item.price.toLocaleString()}
                      </p>
                      <p>Quantity: 1</p>
                      <p>Size: M</p>
                    </div>
                    
                    <p className="text-sm text-gray-600">
                      Order Date: <span className="text-gray-500">25 Jul, 2024</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Status and Actions Section */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  <span className="text-sm font-medium text-green-700">Ready to Ship</span>
                </div>
                
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200">
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;