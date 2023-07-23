import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App/App";
import { AppContextProvider } from "./context/app.context.provider";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.querySelector(".app") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Router>
  </React.StrictMode>
);
