import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import EditTask from "./pages/EditTask";
import AddTask from "./pages/AddTask";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "add-task",
          element: <AddTask />,
        },
        {
          path: "/edit-task/:id",
          element: <EditTask />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
