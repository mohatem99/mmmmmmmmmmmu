import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import { ProductsProvider } from "./Context/ProductsContext";
import { CartProvider } from "./Context/CartContext";
import Cart from "./Pages/Cart";
import ProductDetails from "./Components/Products/ProductDetails";
import CheckOut from "./Components/Checkout/CheckOut";
import CompareProductsPage from "./Pages/CompareProductsPage";
import { CompareProvider } from "./Context/CompareContext";
import AdminLayout from "./Components/Layout/AdminLayout";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProductDetailsDashboard from "./Components/Dashboard/ProductDetailsDashboard";
import AddProduct from "./Components/Dashboard/AddProduct";
import EditProduct from "./Components/Dashboard/EditProduct";
import ProductDashboard from "./Components/Dashboard/ProductDashboard";
import Login from "./Components/Login/Login";
import { AuthProvider } from "./Context/AuthContext";
import AuthGuard from "./Guards/AuthGuard";
import ErrorPage from "./Pages/ErrorPage";
let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: ":id", element: <ProductDetails /> },
      { path: "check-out", element: <CheckOut /> },
      { path: "compare", element: <CompareProductsPage /> },
      { path: "login", element: <Login /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
  {
    path: "admin-dashboard",
    element: (
      <AuthGuard>
        <AdminLayout />
      </AuthGuard>
    ),
    children: [
      {
        index: true,
        element: (
          <AuthGuard>
            <Dashboard />
          </AuthGuard>
        ),
      },
      {
        path: "products",
        element: (
          <AuthGuard>
            <ProductDashboard />
          </AuthGuard>
        ),
      },
      {
        path: "products/add",
        element: (
          <AuthGuard>
            <AddProduct />
          </AuthGuard>
        ),
      },
      {
        path: "products/:id",
        element: (
          <AuthGuard>
            <ProductDetailsDashboard />{" "}
          </AuthGuard>
        ),
      },
      {
        path: "edit/:id",
        element: (
          <AuthGuard>
            <EditProduct />
          </AuthGuard>
        ),
      },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);
function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductsProvider>
          <CompareProvider>
            <RouterProvider router={router} />
          </CompareProvider>
        </ProductsProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
