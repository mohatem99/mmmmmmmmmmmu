import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentCart = JSON.parse(localStorage.getItem("cart"));

    setCart(currentCart);

    setLoading(false);
  }, []);
  const addToCart = (product) => {
    let currentCart = JSON.parse(localStorage.getItem("cart")) || [];

    const productExist = currentCart.find((el) => el.id == product.id);
    if (!productExist) {
      currentCart.push(product);
      localStorage.setItem("cart", JSON.stringify(currentCart));
    }
    setCart(currentCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id != productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <CartContext.Provider value={{ addToCart, cart, removeFromCart, loading }}>
      {children}
    </CartContext.Provider>
  );
};
