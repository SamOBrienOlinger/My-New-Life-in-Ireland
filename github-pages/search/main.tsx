import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import SearchPage from "../../app/search/page";
import "../../app/globals.css";

const root = document.getElementById("root");
if (!root) throw new Error("The application root element was not found.");
createRoot(root).render(<StrictMode><SearchPage /></StrictMode>);
