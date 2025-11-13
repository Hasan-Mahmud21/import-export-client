import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";

import RootLayout from "./layout/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import AddExport from "./pages/AddExport.jsx";
import MyExports from "./pages/MyExports.jsx";
import MyImports from "./pages/MyImports.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./routes/PrivateRoutes.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("http://localhost:3000/latest-products"),
      },
      {
        path: "/allProducts",
        element: <AllProducts />,
        loader: () => fetch("http://localhost:3000/products"),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
      },
      {
        path: "/add-export",
        element: (
          <PrivateRoute>
            <AddExport />
          </PrivateRoute>
        ),
      },
      {
        path: "/myExports",
        element: (
          <PrivateRoute>
            <MyExports />
          </PrivateRoute>
        ),
      },
      {
        path: "/myImports",
        element: (
          <PrivateRoute>
            <MyImports></MyImports>
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      {/* 👇 This is what actually renders all your toast.success / toast.error */}
      <ToastContainer position="top-right" theme="colored" autoClose={2000} />
    </AuthProvider>
  </StrictMode>
);
