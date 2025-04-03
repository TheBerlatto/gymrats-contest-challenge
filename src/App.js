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
        <header className="bg-[#005C53] text-white p-3 text-center">
          <h1 className="text-4xl md:text-6xl text-center text-white mt-8 mb-6">
            Desafio GymRats | Contestação 💪
          </h1>
          <div className="flex justify-center mt-4">
            <nav className="flex justify-center space-x-4 p-4">
              <Link
                to="/"
                className="px-6 py-2 text-white bg-[#9FC131] hover:bg-[#DBF227] rounded-lg transition duration-300"
              >
                Início
              </Link>
              <Link
                to="/about"
                className="px-6 py-2 text-white bg-[#9FC131] hover:bg-[#DBF227] rounded-lg transition duration-300"
              >
                Sobre
              </Link>
              <Link
                to="/rules"
                className="px-6 py-2 text-white bg-[#9FC131] hover:bg-[#DBF227] rounded-lg transition duration-300"
              >
                Regras
              </Link>
            </nav>
          </div>
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
