import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Projects from "./components/projects/projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
