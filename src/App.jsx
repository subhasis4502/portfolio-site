import React, { useEffect, useState } from "react";
import Header from "../src/components/header/Header";
import Nav from "../src/components/nav/Nav";
import About from "../src/components/about/About";
import Experience from "../src/components/experience/Experience";
import Services from "../src/components/services/Services";
import Portfolio from "../src/components/portfolio/Portfolio";
import Testimonials from "../src/components/testimonials/Testimonials";
import Contact from "../src/components/contact/Contact";
import Footer from "../src/components/footer/Footer";
import Preloader from "./components/preloader/Preloader";

// Popup setting
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.MIDDLE,
};

const App = () => {
  const [done, setDone] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDone(false);
    }, 1500);
  }, []);

  return (
    <>
      {done ? (
        <div className="loader">
          <Preloader />
        </div>
      ) : (
        <Provider template={AlertTemplate} {...options}>
          <Header />
          <Nav />
          <About />
          <Experience />
          {/* <Services /> */}
          <Portfolio />
          <Testimonials />
          <Contact />
          <Footer />
        </Provider>
      )}
    </>
  );
};

export default App;
