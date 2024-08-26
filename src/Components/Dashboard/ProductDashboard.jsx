import React, { useContext, useState } from "react";
import { ProductsContext } from "../../Context/ProductsContext";

import axios from "axios";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import AdminProductList from "./AdminProductList";
import { Button } from "flowbite-react";
import AddProduct from "./AddProduct";

export default function ProductDashboard() {
  const { products, setProducts, loading } = useContext(ProductsContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log(`Edit product with id: ${id}`);
  };

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete("https://dummyjson.com/products/${id}");
  //     setProducts(products.filter((product) => product.id !== id));
  //   } catch (error) {
  //     console.error("Error deleting product:", error);
  //   }
  // };

  const handleAddProduct = async (newProduct) => {
    try {
      const { data } = await axios.post(
        "https://dummyjson.com/products/add",
        newProduct
      );
      setProducts([...products, data]);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Products Dashboard
      </h1>
      <div className="flex justify-end mb-6">
        <Button onClick={() => setIsModalOpen(true)}>Add New Product</Button>

        <AddProduct
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddProduct={handleAddProduct}
        />
      </div>
      {/* Products Table */}
      <div className="overflow-x-auto">
        <AdminProductList products={products} />
      </div>
    </div>
  );
}
