import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { RtlProvider } from "./components/rtl-provider.tsx";
import SignUp from "./pages/SignUp.tsx";
import { NewPost } from "./components/NewPost/NewPost.tsx";
import { theme } from './themes/Theme.ts';


import ForgetPassword from "./pages/ForgetPassword.tsx";
import Error from "./pages/Error.tsx";
import {UserProfile} from "./pages/UserProfile.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute.tsx";
import { FriendsProfile } from "./pages/FriendsProfile.tsx";
import { PostContainer } from "./components/PostContainer/PostContainer.tsx";
const queryClient = new QueryClient()



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
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/error",
    element: <Error title="Not Found" subTitle="test" > It's failed </Error>,
  },
  {
    path: "/profile",

    element: <PrivateRoute children={<UserProfile>
      <PostContainer/>
    </UserProfile>}  />,
  },
  {
    path: "/friend/:username",

    element: <PrivateRoute children={<FriendsProfile />}  />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <RtlProvider>
        <RouterProvider router={router} />
      </RtlProvider>
    </ChakraProvider>
    </QueryClientProvider>

  </React.StrictMode>
);
