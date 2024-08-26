import React from "react";

export default function ProceedPayment() {
  return (
    <>
      {" "}
      <div className="space-y-3">
        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-lg hover:bg-cyan-700 p-3 rounded-md dark:text-white hovertext-white font-semibold bg-primary-700 px-5 py-2.5  font-medium text-white hover:bg-primary-1000 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
        >
          Proceed to Payment
        </button>
      </div>
    </>
  );
}
