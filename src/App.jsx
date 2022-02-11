import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./sass/App.scss";

function App() {
     return (
          <div className="main-container">
               <Header />
               <Hero />
               <AboutMe />
               <Contact />
          </div>
     );
}

export default App;
