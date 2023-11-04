import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import { MainView } from "./views/main-view/MainView";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <MainView />
  </React.StrictMode>,
);
