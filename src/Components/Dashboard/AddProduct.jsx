import React, { useState, useContext } from "react";
import {
  Modal,
  Button,
  Label,
  TextInput,
  Select,
  Textarea,
} from "flowbite-react";
import { ProductsContext } from "../../Context/ProductsContext";

function AddProduct({ isOpen, onClose, onAddProduct }) {
  const { categories } = useContext(ProductsContext);
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    description: "",
    image: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProductData((prevData) => ({ ...prevData, image: file }));
  };

  const handleSubmit = () => {
    onAddProduct(productData);
    setProductData({
      name: "",
      category: "",
      brand: "",
      price: "",
      description: "",
      images: [],
    });
    onClose();
  };

  return (
    <Modal show={isOpen} onClose={onClose}>
      <Modal.Header>Add product</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <div>
            <Label htmlFor="productName">Product Name</Label>
            <TextInput
              id="productName"
              name="name"
              value={productData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <Select
              id="category"
              name="category"
              value={productData.category}
              onChange={handleInputChange}
            >
              <option value="">Select category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <Label htmlFor="brand">Brand</Label>
            <TextInput
              id="brand"
              name="brand"
              value={productData.brand}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="price">Price</Label>
            <TextInput
              id="price"
              name="price"
              type="number"
              value={productData.price}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="description">Product description</Label>
            <Textarea
              id="description"
              name="description"
              value={productData.description}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="image">Product Image</Label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>Add product</Button>
        <Button color="gray" onClick={onClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddProduct;
