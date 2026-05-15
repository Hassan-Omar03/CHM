import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

// Import your page components. 
// Adjust the paths if your components are in a different folder.
import Index from "./routes/index";
import About from "./routes/about";
import Contact from "./routes/contact";
import Products from "./routes/products";
import Services from "./routes/services";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}