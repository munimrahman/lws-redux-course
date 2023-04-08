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
import EditVideo from "./pages/EditVideo/EditVideo";
import EditAssignment from "./pages/EditAssignment/EditAssignment";
import AddAssignment from "./pages/AddAssignment/AddAssignment";
import EditQuiz from "./pages/EditQuiz/EditQuiz";
import AddQuiz from "./pages/AddQuiz/AddQuiz";
import StudentRoute from "./Routes/StudentRoute/StudentRoute";
import useAuthCheck from "./hooks/useAuthCheck";
import PublicRoute from "./Routes/PublicRoute/PublicRoute";
import AdminRoute from "./Routes/AdminRoute/AdminRoute";

function App() {
  const authCheck = useAuthCheck();
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PublicRoute>
          <StudentLogin />
        </PublicRoute>
      ),
    },
    {
      path: "/registration",
      element: (
        <PublicRoute>
          <StudentRegistration />
        </PublicRoute>
      ),
    },
    {
      path: "/admin-login",
      element: (
        <PublicRoute>
          <AdminLogin />
        </PublicRoute>
      ),
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // {
        //   path: "/login",
        //   element: <StudentLogin />,
        // },
        // {
        //   path: "/registration",
        //   element: <StudentRegistration />,
        // },
        {
          path: "/course",
          element: (
            <StudentRoute>
              <CourseLayout />
            </StudentRoute>
          ),
          children: [
            {
              path: "/course/:id",
              element: (
                <StudentRoute>
                  <CoursePlayer />
                </StudentRoute>
              ),
            },
          ],
        },
        {
          path: "/quiz/:id",
          element: (
            <StudentRoute>
              <Quiz />
            </StudentRoute>
          ),
        },
        {
          path: "/leaderboard",
          element: (
            <StudentRoute>
              <LeaderBoard />
            </StudentRoute>
          ),
        },
      ],
    },
    {
      path: "/admin",
      element: <Layout />,
      children: [
        {
          path: "/admin",
          element: (
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          ),
        },
        {
          path: "/admin/videos",
          element: (
            <AdminRoute>
              <Videos />
            </AdminRoute>
          ),
        },
        {
          path: "/admin/add-video",
          element: (
            <AdminRoute>
              <AddVideo />
            </AdminRoute>
          ),
        },
        {
          path: "/admin/edit-video/:id",
          element: (
            <AdminRoute>
              <EditVideo />
            </AdminRoute>
          ),
        },
        {
          path: "/admin/assignments",
          element: (
            <AdminRoute>
              <Assignment />
            </AdminRoute>
          ),
        },
        {
          path: "/admin/add-assignment",
          element: (
            <AdminRoute>
              <AddAssignment />
            </AdminRoute>
          ),
        },
        {
          path: "/admin/edit-assignment/:id",
          element: (
            <AdminRoute>
              <EditAssignment />
            </AdminRoute>
          ),
        },
        {
          path: "/admin/quizzes",
          element: (
            <AdminRoute>
              <Quizzes />
            </AdminRoute>
          ),
        },
        {
          path: "/admin/add-quiz",
          element: (
            <AdminRoute>
              <AddQuiz />
            </AdminRoute>
          ),
        },
        {
          path: "/admin/edit-quiz/:id",
          element: (
            <AdminRoute>
              <EditQuiz />
            </AdminRoute>
          ),
        },
        {
          path: "/admin/assignment-marks",
          element: (
            <AdminRoute>
              <AssignmentMark />
            </AdminRoute>
          ),
        },
      ],
    },
  ]);

  return authCheck && <RouterProvider router={router} />;
}

export default App;
