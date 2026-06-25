import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="mx-auto max-w-6xl">
      <Header />
      <About />
      <Experience />
      <Skills />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
