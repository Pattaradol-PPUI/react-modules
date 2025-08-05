import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ErrorBoundary from "./components/error/ErrorBoundary";
import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <ChakraProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
    </ChakraProvider>

  </React.StrictMode>
);
