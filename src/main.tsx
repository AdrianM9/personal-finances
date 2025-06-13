import Framework7React from "framework7-react";
import Framework7 from "framework7/bundle";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";
import "framework7/css/bundle";

Framework7.use(Framework7React);

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <App/>
  </StrictMode>,
);
