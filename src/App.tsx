import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { RtlProvider } from "./components/rtl-provider";
const theme = extendTheme();
function App() {
  return (
    <ChakraProvider>
      <RtlProvider>
        <Layout />
      </RtlProvider>
    </ChakraProvider>
  );
}

export default App;
