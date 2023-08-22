import { useState } from "react";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { RtlProvider } from "./components/rtl-provider";
import InputText from "./components/ui/input/inputText";
const theme = extendTheme();
function App() {
  return (
    <ChakraProvider>
      <RtlProvider>
        <Layout>
          <h1>Hello!</h1>
        </Layout>
      </RtlProvider>
    </ChakraProvider>
  );
}

export default App;
