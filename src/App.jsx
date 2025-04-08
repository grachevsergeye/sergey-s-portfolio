import LazyLoad from "react-lazyload";
import { lazy, Suspense } from "react";
import Hero from "./components/hero/Hero";
import Contact from "./components/contact/Contact";

const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));

const App = () => {
  return (
    <div className="container">
           {/* Disabled lazy loading for homepage and contacts for button to work properly */}
          <section id="home">
            <Hero />
          </section>

      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="services">
            <Services />
          </section>{" "}
        </LazyLoad>
      </Suspense>

      <Suspense fallback={"loading..."}>
        <LazyLoad height={"600vh"} offset={-100}>
          {/* <section id="portfolio"> */}
          <Portfolio />
          {/* </section>{" "} */}
        </LazyLoad>
      </Suspense>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;