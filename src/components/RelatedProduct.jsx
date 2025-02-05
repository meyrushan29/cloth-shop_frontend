import  { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

import Title from '../components/Title';
import ProductItem from './ProductItem';

const RelatedProduct = ({ category, subCategory }) => {

    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) { 
            let productscopy = products.slice();

            // Filter by category
            productscopy = productscopy.filter((item) => category === item.category);

            // Filter by subCategory
            productscopy = productscopy.filter((item) => subCategory === item.subCategory);

            setRelated(productscopy.slice(0, 5));
        }
    },  [products, category, subCategory]); // Ensure reactivity

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {related.map((item) => (
                    <ProductItem key={item._id} id={item._id} name={item.name} price={item.price} image={item.image} />
                ))}
            </div>
        </div>
    );
};

export default RelatedProduct;
