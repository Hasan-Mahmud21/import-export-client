import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layout/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import AllProducts from "./pages/AllProducts.jsx";

import ProductDetails from "./pages/ProductDetails.jsx";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import AddExport from "./pages/AddExport.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/latest-products"),
      },
      {
        path: "/allProducts",
        element: <AllProducts></AllProducts>,
        loader: () => fetch("http://localhost:3000/products"),
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`)
      },
      {
        path: "/add-export",
        element: <AddExport></AddExport>,
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
