import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products?.length > 0) { 
      const bestProduct = products.filter((item) => item.bestSeller === true);
      
      // Debugging the filtered data
      console.log('Best Seller Products:', bestProduct);
      setBestSeller(bestProduct.slice(0, 5));
    }
  }, [products]); // Add products to the dependency array
  

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLER'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dicta dolore nihil possimus adipisci velit magni illum excepturi ipsam beatae perferendis nulla quibusdam, hic quidem sed iure maxime animi reprehenderit?
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {bestSeller.length > 0 ? (
          bestSeller.map((item) => (
            <ProductItem 
              key={item._id} // Use _id instead of index
              id={item._id} 
              name={item.name} 
              image={item.image} 
              price={item.price} 
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No best seller products found.</p>
        )}
      </div>
    </div>
  );
};

export default BestSeller;
