import { useFormik } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

export default function Login() {
  const { isAuthenticated, handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: login,
    // validation
    validate: validate,
  });

  function validate(values) {
    let errors = {};

    if (values.email == "") {
      errors.email = "Email is required";
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        values.email
      )
    ) {
      errors.email = "Enter Vaild Email";
    }

    if (values.password == "") {
      errors.password = "Password is required";
    }
    return errors;
  }
  console.log(formik.errors);

  function login(values) {
    // console.log(formik.values);
    if (values.email === "admin@gmail.com" && values.password === "123456") {
      // Redirect to dashboard
      handleLogin();
      navigate("/admin-dashboard");
    } else {
      console.log("Login failed");
    }
  }
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            type="email"
            id="email"
            className="bg-gray-50 border border-cyan-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-cyan-700 dark:border-cyan-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
            placeholder="name@gmail.com"
            required
          />
          {formik.errors.email && formik.touched.email && (
            <p className="bg-cyan-800 text-white p-1 my-1 text-sm rounded">
              {formik.errors.email}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            type="password"
            id="password"
            className="bg-gray-50 border border-cyan-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="*******"
            required
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Login
        </button>
      </form>
    </>
  );
}
