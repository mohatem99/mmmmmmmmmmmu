import { createContext, useState, useEffect } from "react";

export const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [compareProducts, setCompareProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentCompare = JSON.parse(localStorage.getItem("compare")) || [];

    setCompareProducts(currentCompare);

    setLoading(false);
  }, []);

  const addToCompare = (product) => {
    let currentCompareProducts =
      JSON.parse(localStorage.getItem("compare")) || [];
    const productExistInCompare = compareProducts.find(
      (el) => el.id == product.id
    );

    if (!productExistInCompare && compareProducts.length < 2) {
      console.log("hi");
      currentCompareProducts.push(product);
      localStorage.setItem("compare", JSON.stringify(currentCompareProducts));
      setCompareProducts(currentCompareProducts);
    }
  };
  return (
    <CompareContext.Provider value={{ addToCompare, compareProducts, loading }}>
      {children}
    </CompareContext.Provider>
  );
};
