import React from "react";
import ReactDOM from "react-dom/client";

import { Admin } from './views/admin/Admin';

import "./index.scss";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
    <React.StrictMode>
        <Admin />
    </React.StrictMode>
);
