import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import { createRoot } from "react-dom/client";
import GlobalStyles from "@mui/material/GlobalStyles";
import "./index.css";
// import App from "./HOTMAN/App";
import App from "./App.jsx";
// import App from "./schoolhub/App.jsx";
// import App from "./schoolhub2/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst enableCssLayer>
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
);
