import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard/LeaderBoard";
import StudentLogin from "./pages/StudentLogin/StudentLogin";
import StudentRegistration from "./pages/StudentRegistration/StudentRegistration";
import CoursePlayer from "./pages/CoursePlayer/CoursePlayer";
import Quiz from "./pages/Quiz/Quiz";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <StudentLogin />,
    },
    {
      path: "/registration",
      element: <StudentRegistration />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <StudentLogin />,
        },
        {
          path: "/registration",
          element: <StudentRegistration />,
        },
        {
          path: "/course-player",
          element: <CoursePlayer />,
        },
        {
          path: "/quiz",
          element: <Quiz />,
        },
        {
          path: "/leaderboard",
          element: <LeaderBoard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
