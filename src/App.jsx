import { useEffect } from "react";
import Hero from "./components/hero/Hero";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container">

          <section id="home">
            <Hero />
          </section>

          <section id="services">
            <Services />
          </section>

            <Portfolio />

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;