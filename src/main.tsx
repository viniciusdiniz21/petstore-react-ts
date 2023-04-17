import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.scss";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppRoutes />
);
