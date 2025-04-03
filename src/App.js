import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import Rules from "./components/Rules";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="bg-green-600 text-white p-4 text-center">
          <h1 className="text-4xl font-bold text-white-800 mb-4">Desafio - Contestação no Foco | Gymrats</h1>
          <nav>
            <Link to="/" className="mr-4">Início</Link>
            <Link to="/about" className="mr-4">Sobre</Link>
            <Link to="/rules">Regras</Link>
          </nav>
        </header>
        <main className="flex-grow p-4">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
