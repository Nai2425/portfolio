import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />

      {/* Footer */}
      <footer className="bg-darker py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2026 Ian Beach Villadarez.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
