import { useContext } from "react";
import Loader from "../Components/Loader/Loader";
import { CompareContext } from "../Context/CompareContext";

function CompareProductsPage() {
  const { compareProducts, loading } = useContext(CompareContext);

  if (loading) {
    return <Loader />;
  }
  if (compareProducts?.length < 2) {
    return <h3 className="mt-5">No Products To Compare</h3>;
  }
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-7">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>

            {compareProducts.map((element) => (
              <th scope="col" className="px-6 py-3" key={element.id}>
                {element.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Price
            </th>
            {compareProducts.map((element) => (
              <td className="px-6 py-4" key={element.id}>
                {element.price}
              </td>
            ))}
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="col" className="px-6 py-3">
              Rating
            </th>

            {compareProducts.map((element) => (
              <td scope="col" className="px-6 py-3" key={element.id}>
                {element.rating}
              </td>
            ))}
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="col" className="px-6 py-3">
              DiscountPercentage
            </th>

            {compareProducts.map((element) => (
              <td scope="col" className="px-6 py-3" key={element.id}>
                {element.discountPercentage}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CompareProductsPage;
