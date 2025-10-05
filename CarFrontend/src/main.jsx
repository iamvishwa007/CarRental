import { StrictMode, createContext, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./Components/Sign/Login/Login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./Components/Sign/Login/SignUp.jsx";




const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  {path:"/signup",element: <SignUp/>}
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
);
