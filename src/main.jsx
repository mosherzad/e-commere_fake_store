import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductProvider from "./contexts/ProductContext.jsx";
import SlidebarProvider from "./contexts/SlidebarContext.jsx";
import CardProvider from "./contexts/CardContext.jsx";
createRoot(document.getElementById("root")).render(
  <SlidebarProvider>
    <CardProvider>
      <ProductProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </ProductProvider>
    </CardProvider>
  </SlidebarProvider>
);
