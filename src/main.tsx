import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { RtlProvider } from "./components/rtl-provider.tsx";
import SignUp from "./pages/SignUp.tsx";
import { NewPost } from "./components/NewPost/NewPost.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewPost />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RtlProvider>
        <RouterProvider router={router} />
      </RtlProvider>
    </ChakraProvider>
  </React.StrictMode>
);
