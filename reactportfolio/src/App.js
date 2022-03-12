import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  return (
    <div className="App">
      {/* Navigation Bellow */}
      <Nav></Nav>
      {/* Hero Image */}
      <Hero></Hero>
      <section>
        <PortfolioContainer></PortfolioContainer>
      </section>
    </div>
  );
}

export default App;
