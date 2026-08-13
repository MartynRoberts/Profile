import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="mx-auto max-w-6xl">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
