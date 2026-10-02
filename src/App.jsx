import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <Home />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
