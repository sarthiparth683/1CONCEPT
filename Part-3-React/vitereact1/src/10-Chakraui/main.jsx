import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

const Chakra1 = () => {
  return (
    <>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </>
  );
};

export default Chakra1;
 