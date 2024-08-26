import React from "react";
import { Link } from "react-router-dom";

export default function AdminProductList({ products }) {
  return (
    <>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="px-4 py-2">{product.id}</td>
              <td className="px-4 py-2">
                <strong>{product.title}</strong>
              </td>
              <td className="px-4 py-2">${product.price}</td>
              <td className="px-4 py-2">
                {product.description.substring(0, 100)}...
              </td>
              <td className="px-4 py-2 flex space-x-2">
                <Link
                  to={`${product.id}`}
                  className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
