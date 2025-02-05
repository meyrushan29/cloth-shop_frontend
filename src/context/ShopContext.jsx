import { createContext,  useState } from "react";
import { products } from "../assets/assets";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

// Create a new context for the Shop
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    // Define constants and data to be shared
    const currency = "$";
    const delivery_fee = 10;
    const [search,setSearch] = useState('')
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});


    const addToCart = async (itemId,size) => {

            if(!size){
            toast.error('Select Product Size')
            return;
            }

            let cartData = structuredClone(cartItems);

            if(cartData[itemId]){
                if(cartData[itemId][size]){
                    cartData[itemId][size] += 1;
                }

                else {
                    cartData[itemId][size] = 1;
                }
            }

            else {
                cartData[itemId] = {};
                cartData[itemId][size] = 1;
            }

            setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item]; // Fixed the incorrect addition operation
                    }
                } catch (error) {
                    console.error(error); // Added error logging for debugging
                }
            }
        }
        return totalCount;
    };


    const updateQuantity = async (itemId, size, quantity) => {

        // Create a new copy of the cartItems to prevent direct mutation
        let updatedCartItems = structuredClone(cartItems);
      
        // Update the quantity for the specified item and size
        updatedCartItems[itemId][size] = quantity;
      
        // Update the state with the new cartItems
        setCartItems(updatedCartItems);
      }
      

      const getCartAmount = () => {

        let totalAmount = 0;
    
        for (const items in cartItems) {
            // Corrected the find condition to match the product _id
            let itemInfor = products.find(product => product._id === items);
    
            // Ensure itemInfor exists before proceeding
            if (!itemInfor) continue;
    
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {  // Fixed condition syntax
                        totalAmount += itemInfor.price * cartItems[items][item];
                    }
                } catch  {
                    // Handle error if any
                }
            }
        }
    
        return totalAmount;
    }
    
    
    


    // Value to be provided to context consumers
    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems, addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

// Validate props using PropTypes
ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
