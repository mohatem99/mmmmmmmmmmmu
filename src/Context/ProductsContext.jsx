import { createContext, useEffect, useState } from "react";
import { api } from "../Api/axios";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [orderBy, setOrderBy] = useState("");

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      console.log(res.data.total);
      setProducts(res.data.products);
      setPageCount(Math.ceil(res.data.total / 30));
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  // get all categories
  const fetchCategories = async () => {
    try {
      const res = await api.get("/products/category-list");

      setCategories(res.data);
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const filterComponetOrders = async (val) => {
    try {
      const res = await api.get(`/products?sortBy=title&order=${val}`);
      setPageCount(res.data.total / 30);
      setProducts(res.data.products);
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductsSearch = async (query) => {
    try {
      const res = await api.get(`/products/search?q=${query}`);

      setProducts(res.data.products);
      setPageCount(res.data.total / 30);
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    fetchProductsSearch(query);
  };

  const productsPagination = async (page) => {
    try {
      let limit = 30;

      let skip = (page - 1) * limit;

      const res = await api.get(`/products?limit=${limit}&skip=${skip}`);

      setProducts(res.data.products);
      setPageCount(res.data.total / 30);
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <ProductsContext.Provider
      value={{
        products,
        orderBy,
        setOrderBy,
        filterComponetOrders,
        loading,
        handleSearch,
        productsPagination,
        pageCount,
        categories,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
