import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import "./sass/App.scss";

function App() {
     return (
          <div className="main-container">
               <Header />
               <Hero />
               <AboutMe />
               <Projects />
               <Contact />
          </div>
     );
}

export default App;
