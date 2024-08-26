import { useContext } from "react";
import { ProductsContext } from "../../Context/ProductsContext";
import ProductCard from "./ProductCard";
import FilterComponent from "../Filters/FilterComponent";
import Loader from "../Loader/Loader";
import { Pagination } from "flowbite-react";

function Products() {
  const { products, loading } = useContext(ProductsContext);
  if (loading) return <Loader />;
  return (
    <>
      <FilterComponent />
      <div className="grid grid-cols-1 md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products?.map((el) => (
          <ProductCard key={el.id} product={el} />
        ))}
      </div>
    </>
  );
}

export default Products;
