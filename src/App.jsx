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
import Dashboard from "./pages/Dashboard/Dashboard";
import Videos from "./pages/Videos/Videos";
import AssignmentMark from "./pages/AssignmentMark/AssignmentMark";
import Assignment from "./pages/Assignment/Assignment";
import Quizzes from "./pages/Quizzes/Quizzes";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import CourseLayout from "./components/Layout/CourseLayout";
import AddVideo from "./pages/AddVideo/AddVideo";

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
      path: "admin-login",
      element: <AdminLogin />,
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
          path: "/course",
          element: <CourseLayout />,
          children: [
            {
              path: "/course/:id",
              element: <CoursePlayer />,
            },
          ],
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
    {
      path: "/admin",
      element: <Layout />,
      children: [
        {
          path: "/admin",
          element: <Dashboard />,
        },
        {
          path: "/admin/videos",
          element: <Videos />,
        },
        {
          path: "/admin/add-video",
          element: <AddVideo />,
        },
        {
          path: "/admin/assignments",
          element: <Assignment />,
        },
        {
          path: "/admin/quizzes",
          element: <Quizzes />,
        },
        {
          path: "/admin/assignment-marks",
          element: <AssignmentMark />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
