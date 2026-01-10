import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";

// Existing Layout & Pages
import RootLayout from "./layout/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import AddExport from "./pages/AddExport.jsx";
import MyExports from "./pages/MyExports.jsx";
import MyImports from "./pages/MyImports.jsx";

// New Dashboard Components
import DashboardLayout from "./layout/DashboardLayout.jsx";
import DashboardOverview from "./pages/Dashboard/DashboardOverview.jsx";
import Profile from "./pages/Dashboard/Profile.jsx";

// Auth & Routing
import AuthProvider from "./context/AuthProvider.jsx";
import PrivateRoute from "./routes/PrivateRoutes.jsx";

// Utilities
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./pages/About.jsx";

export const router = createBrowserRouter([
  // Public Routes
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () =>
          fetch("https://tradesphere-server.vercel.app/latest-products"),
      },
      {
        path: "allProducts",
        element: <AllProducts />,
        loader: () => fetch("https://tradesphere-server.vercel.app/products"),
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "productDetails/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`https://tradesphere-server.vercel.app/products/${params.id}`),
      },
      {
        path: "auth/login",
        element: <Login />,
      },
      {
        path: "auth/register",
        element: <Register />,
      },
    ],
  },

  // Private Dashboard Routes
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true, // Path: /dashboard
        element: <DashboardOverview />,
      },
      {
        path: "profile", // Path: /dashboard/profile
        element: <Profile />,
      },
      {
        path: "add-export", // Path: /dashboard/add-export
        element: <AddExport />,
      },
      {
        path: "my-exports", // Path: /dashboard/my-exports
        element: <MyExports />,
      },
      {
        path: "my-imports", // Path: /dashboard/my-imports
        element: <MyImports />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" theme="colored" autoClose={2000} />
    </AuthProvider>
  </StrictMode>
);
