import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store.js";
import { Provider } from "react-redux";
import Home from "./pages/Home.jsx"
import AddPost from "./pages/AddPost.jsx"
import AllPost from "./pages/AllPost.jsx"
import Post from "./pages/Post.jsx"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import AuthLayout from "./components/AuthLayout.jsx"
import EditPost from "./pages/EditPost.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: (
        <AuthLayout authentication={false}>
          <Login />
        </AuthLayout>
        )
      },
      {
        path: "/singup",
        element: (
        <AuthLayout authentication={false}>
          <Signup />
        </AuthLayout>
        )
      },
      {
        path: "/allpost",
        element: (
        <AuthLayout authentication>
          <AllPost />
        </AuthLayout>
        )
      },
      {
        path: "/addpost",
        element: (
        <AuthLayout authentication>
          <AddPost />
        </AuthLayout>
        )
      },
      {
        path: "/edit-post/:slug",
        element: (
        <AuthLayout authentication>
          <EditPost />
        </AuthLayout>
        )
      },
      {
        path: "/post/:slug",
        element: (
        <AuthLayout authentication>
          <Post />
        </AuthLayout>
        )
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
