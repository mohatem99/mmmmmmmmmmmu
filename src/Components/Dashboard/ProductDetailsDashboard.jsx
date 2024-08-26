import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { api } from "../../utils/axios";
import Loader from "../Loader/Loader";
import Swal from "sweetalert2";
import { Button } from "flowbite-react";

export default function ProductDetailsDashboard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, loading] = useFetch(id);

  const handleDelete = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await api.delete(`${id}`);
        navigate("/admin-dashboard/products"); // Redirect to the products list
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };
  if (loading) return <Loader />;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          {product.images && product.images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              ))}
            </div>
          ) : (
            <p>No images available</p>
          )}
        </div>
        <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
        <p className="text-lg mb-4">{product.description}</p>
        <p className="text-gray-500 mb-4">Price: ${product.price}</p>
        <p className="text-gray-500 mb-4">Category: {product.category}</p>

        <div className="flex space-x-4 mt-6">
          <Link
            to={`/admin-dashboard/edit/${product.id}`}
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            <i className="fas fa-edit mr-1"></i>
            Edit Product
          </Link>
          <Button color="red" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
