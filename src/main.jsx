import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layout/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import LatestProducts from "./pages/LatestProducts.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/allProducts",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/latest-products",
        element: <LatestProducts></LatestProducts>,
      },
      {
        path: "productDetails/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
