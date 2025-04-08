import LazyLoad from "react-lazyload";
import { lazy, Suspense, useEffect } from "react";
import Hero from "./components/hero/Hero";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";

const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));

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
           {/* Disabled lazy loading for button and scroll to work properly */}
          <section id="home">
            <Hero />
          </section>

          <section id="services">
            <Services />
          </section>{" "}

      <Suspense fallback={"loading..."}>
        <LazyLoad height={"600vh"} offset={-100}>
          <Portfolio />
        </LazyLoad>
      </Suspense>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;