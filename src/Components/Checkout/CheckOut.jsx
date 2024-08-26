import { useState } from "react";
import { getData } from "country-list";
import Swal from "sweetalert2";

import OrderSummery from "../OrderSummery/OrderSummery";
import SummaryInfo from "../OrderSummery/SummaryInfo";
import ProceedPayment from "./ProceedPayment";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function CheckOut() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const countries = getData();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      address: "",
      phone: "",
      payment_method: "",
      delivery_method: "",
    },
    onSubmit: checkout,
    // validation
    validationSchema: validate,
  });

  function validate(values) {
    let errors = Yup.object({
      name: Yup.string()
        .trim()
        .required("Name is required")
        .min(3, "Name length must be 3 characters or more")
        .max(20, "Name cannot be longer than 20 characters"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      country: Yup.string().required("Country is required"),
      address: Yup.string()
        .required("Address is required")
        .min(20, "Name length must be 20 characters or more")
        .max(60, "Name cannot be longer than 60 characters"),
      phone: Yup.string()
        .required("Phone number is required")
        .matches(
          /^\+?(\d.*){9,}$/,
          "Phone number must be valid (e.g. +123456789)"
        ),
      payment_method: Yup.string().required("Payment method is required"),
      // delivery_method: Yup.string().required("Delivery method is required"),
    });
    return errors;
  }

  function checkout(values) {
    // console.log(formik.values);

    navigate("/");
  }

  return (
    <>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 rounded-lg md:py-16">
        <form
          onSubmit={formik.handleSubmit}
          className="mx-auto max-w-screen-xl px-4 2xl:px-0"
        >
          <div className="flex items-center justify-center h-full">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              CheckOut
            </h1>
          </div>

          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div className="min-w-0 flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Delivery Details
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your name{" "}
                    </label>
                    <input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      type="text"
                      id="name"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Your name"
                      required=""
                    />
                    {formik.errors.name && formik.touched.name && (
                      <p className="bg-cyan-700 text-white p-1 my-1 text-sm rounded">
                        {formik.errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Your email{" "}
                    </label>
                    <input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      type="text"
                      id="email"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="name@flowbite.com"
                      required=""
                    />
                    {formik.errors.email && formik.touched.email && (
                      <p className="bg-cyan-700 text-white p-1 my-1 text-sm rounded">
                        {formik.errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <label
                        htmlFor="select-country-input-3"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Country
                      </label>
                    </div>
                    <select
                      id="select-country-input-3"
                      name="country"
                      value={formik.values.country}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    >
                      <option value="">Select a country</option>
                      {countries.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                    {formik.errors.country && formik.touched.country && (
                      <p className="bg-cyan-800 text-white p-1 my-1 text-sm rounded">
                        {formik.errors.country}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="your_email"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Your address{" "}
                    </label>
                    <input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.address}
                      type="address"
                      id="address"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="name@flowbite.com"
                      required=""
                    />
                    {formik.errors.address && formik.touched.address && (
                      <p className="bg-cyan-800 text-white p-1 my-1 text-sm rounded">
                        {formik.errors.address}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Your Phone{" "}
                    </label>
                    <input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                      type="text"
                      id="phone"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="name@flowbite.com"
                      required=""
                    />
                    {formik.errors.phone && formik.touched.phone && (
                      <p className="bg-cyan-800 text-white p-1 my-1 text-sm rounded">
                        {formik.errors.phone}
                      </p>
                    )}
                  </div>
                </div>
                <>
                  {/* Payment */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Payment
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      {/* Credit Card Option */}
                      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              id="credit-card"
                              aria-describedby="credit-card-text"
                              type="radio"
                              name="payment_method"
                              value="credit_card"
                              checked={
                                formik.values.payment_method === "credit_card"
                              }
                              className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            />
                          </div>
                          <div className="ms-4 text-sm">
                            <label
                              htmlFor="credit-card"
                              className="font-medium leading-none text-gray-900 dark:text-white"
                            >
                              Credit Card
                            </label>
                            <p
                              id="credit-card-text"
                              className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                            >
                              Pay with your credit card
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Payment on Delivery Option */}
                      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              id="pay-on-delivery"
                              aria-describedby="pay-on-delivery-text"
                              type="radio"
                              name="payment_method"
                              value="pay_on_delivery"
                              checked={
                                formik.values.payment_method ===
                                "pay_on_delivery"
                              }
                              className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            />
                          </div>
                          <div className="ms-4 text-sm">
                            <label
                              htmlFor="pay-on-delivery"
                              className="font-medium leading-none text-gray-900 dark:text-white"
                            >
                              Payment on delivery
                            </label>
                            <p
                              id="pay-on-delivery-text"
                              className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                            >
                              +$15 payment processing fee
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Paypal Option */}
                      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              id="paypal-2"
                              aria-describedby="paypal-text"
                              type="radio"
                              name="payment_method"
                              value="paypal"
                              checked={
                                formik.values.payment_method === "paypal"
                              }
                              className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            />
                          </div>
                          <div className="ms-4 text-sm">
                            <label
                              htmlFor="paypal-2"
                              className="font-medium leading-none text-gray-900 dark:text-white"
                            >
                              Paypal account
                            </label>
                            <p
                              id="paypal-text"
                              className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                            >
                              Connect to your account
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {formik.errors.payment_method &&
                    formik.touched.payment_method && (
                      <p className="bg-cyan-800 text-white p-1 my-1 text-sm rounded">
                        {formik.errors.payment_method}
                      </p>
                    )}
                </>
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0  ">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Order summary
                </p>
                <SummaryInfo />
                <ProceedPayment />
                {/* <div className="space-y-3">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-lg hover:bg-cyan-700 p-3 rounded-md dark:text-white hovertext-white font-semibold bg-primary-700 px-5 py-2.5  font-medium text-white hover:bg-primary-1000 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
                  >
                    Proceed to Payment
                  </button>
                </div> */}
                <div className="mt-6 flex items-center justify-center gap-8">
                  <img
                    className="h-8 w-auto dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg"
                    alt=""
                  />
                  <img
                    className="hidden h-8 w-auto dark:flex"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg"
                    alt=""
                  />
                  <img
                    className="h-8 w-auto dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
                    alt=""
                  />
                  <img
                    className="hidden h-8 w-auto dark:flex"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg"
                    alt=""
                  />
                  <img
                    className="h-8 w-auto dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg"
                    alt=""
                  />
                  <img
                    className="hidden h-8 w-auto dark:flex"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
