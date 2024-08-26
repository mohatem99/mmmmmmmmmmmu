import React, { useState, useContext, useEffect } from "react";
import { api } from "../../utils/axios";
import { Label, TextInput, Textarea, Button } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    image: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setProduct((prevProduct) => ({
      ...prevProduct,
      images: files,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await api.put(`${id}`, product);
      console.log(response);

      navigate(`/admin-dashboard/products/${id}`);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleCancel = () => {
    navigate(`/admin-dashboard/products/${id}`);
  };
  if (loading) return <Loader />;
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title" value="Product Name" />
          <TextInput
            id="title"
            name="title"
            value={product.title}
            onChange={handleInputChange}
            placeholder="Product Name"
            required
          />
        </div>
        <div>
          <Label htmlFor="category" value="Category" />
          <TextInput
            id="category"
            name="category"
            value={product.category}
            onChange={handleInputChange}
            placeholder="Category"
            required
          />
        </div>
        <div>
          <Label htmlFor="price" value="Price" />
          <TextInput
            id="price"
            name="price"
            type="number"
            value={product.price}
            onChange={handleInputChange}
            placeholder="Price"
            required
          />
        </div>
        <div>
          <Label htmlFor="description" value="Description" />
          <Textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleInputChange}
            placeholder="Product Description"
            required
          />
        </div>
        <div>
          <Label htmlFor="images" value="Upload Images" />
          <input
            type="file"
            name="images"
            id="images"
            multiple
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <Button type="submit">Save Changes</Button>
          <Button color="gray" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
