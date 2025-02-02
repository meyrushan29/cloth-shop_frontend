import { createContext } from "react";
import { products } from "../assets/assets";
import PropTypes from "prop-types";

// Create a new context for the Shop
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    // Define constants and data to be shared
    const currency = "$";
    const delivery_fee = 10;

    // Value to be provided to context consumers
    const value = {
        products,
        currency,
        delivery_fee,
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
