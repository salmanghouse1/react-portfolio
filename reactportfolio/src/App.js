import "./App.css";
import About from "./components/content/About.js";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Contact from "./components/content/Contact";
import Portfolio from "./components/content/Portfolio";
import Resume from "./components/content/Resume";

function App() {
  return (
    <div className="App">
      {/* Navigation Bellow */}
      <Nav></Nav>
      {/* Hero Image */}
      <Hero></Hero>
      <section>
        {/* conditionally render bellow components */}

        {/* About Page Component */}
        <About></About>
        {/* Contact Page Component */}
        <Contact></Contact>
        {/* Portfolio Page Component */}
        <Portfolio></Portfolio>
        {/* Resume page component */}
        <Resume></Resume>
        {/* add a footer page component bellow */}
      </section>
    </div>
  );
}

export default App;
