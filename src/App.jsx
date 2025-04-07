import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <Home />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
