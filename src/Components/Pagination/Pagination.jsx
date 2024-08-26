import { useContext, useState } from "react";
import ReactPaginate from "react-paginate";
import { ProductsContext } from "../../Context/ProductsContext";
function Pagination() {
  const { pageCount, productsPagination } = useContext(ProductsContext);

  const handlePage = (e) => {
    console.log(e.selected);
    productsPagination(e.selected + 1);
  };
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        pageRangeDisplayed={5}
        pageCount={pageCount}
        onPageChange={handlePage}
        previousLabel="prev"
        renderOnZeroPageCount={null}
        containerClassName={"flex justify-center mt-8"}
        pageClassName={"mx-3 "}
        pageLinkClassName={
          "w-10 h-10 flex items-center justify-center border rounded-full  hover:bg-cyan-800 "
        }
        previousClassName={"mx-1"}
        previousLinkClassName={
          "w-10 h-10 flex items-center justify-center border rounded-full text-gray-700 hover:bg-cyan-800 hover:text-white"
        }
        nextClassName={"mx-1 "}
        nextLinkClassName={
          "w-10 h-10 flex items-center justify-center  border rounded-full text-gray-700 hover:bg-cyan-800 hover:text-white"
        }
        breakClassName={"mx-1"}
        breakLinkClassName={
          "w-10 h-10 flex items-center justify-center  border rounded-full text-gray-700"
        }
        activeClassName={"text-white bg-cyan-800 rounded-full font-bold"}
      />
    </div>
  );
}

export default Pagination;
