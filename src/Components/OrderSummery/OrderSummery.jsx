import React from "react";
import { Link } from "react-router-dom";
import ProceedCheckout from "./ProceedCheckout";
import SummaryInfo from "./SummaryInfo";

export default function OrderSummery() {
  return (
    <>
      <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0  lg:w-full">
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <p className="text-xl font-semibold text-gray-900 dark:text-white">
            Order summary
          </p>
          <SummaryInfo />

          <div className="flex items-center justify-center gap-2">
            <ProceedCheckout />
          </div>
        </div>
      </div>
    </>
  );
}
