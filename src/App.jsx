import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddNewJob from "./components/AddNewJob/AddNewJob";
import EditJob from "./components/EditJob/EditJob";
import JobBoard from "./components/JobBoard/JobBoard";
import Layout from "./components/Layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <JobBoard />,
        },
        {
          path: "/add-new-job",
          element: <AddNewJob />,
        },
        {
          path: "/edit-job/:id",
          element: <EditJob />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
