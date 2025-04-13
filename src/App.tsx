import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import "./assets/styles/index.css";

// Definición de secciones (ahora son hashes)
export const SECTIONS = {
  HOME: "#home",
  PROJECTS: "#projects",
  NOVELS: "#novels",
  FRIENDS: "#friends",
};

export default function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main className="main-content">
          <Home />
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
