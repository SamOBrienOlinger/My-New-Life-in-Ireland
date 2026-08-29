import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ResourcesPage from "../../app/resources/page";
import "../../app/globals.css";

const root = document.getElementById("root");

if (!root) throw new Error("The application root element was not found.");

createRoot(root).render(<StrictMode><ResourcesPage /></StrictMode>);
