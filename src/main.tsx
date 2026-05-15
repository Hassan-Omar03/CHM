import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; 
import "./routes/styles.css"; 
import App from "./App";

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}