import About from "./About.jsx";

import Hero from "./Hero.jsx";

import { Suspense, useEffect } from "react";
import { Events, scrollSpy } from "react-scroll";
import Contact from "./contact/contact.jsx";
import Foota from "./footer.jsx";
import NavBar from "./navBar.jsx";
import Projects from "./project.jsx";

export default function Home() {
  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <main className="gap-y-2 bg-[#050505]">
      <NavBar />
      <Hero />
      <Suspense>
        <About />
        <Projects />
      </Suspense>
      <Contact />
      <Suspense>
        <Foota />
      </Suspense>
    </main>
  );
}
