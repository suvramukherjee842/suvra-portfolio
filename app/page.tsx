import Nav from "./components/Nav";
import Stage from "./components/Stage";
import Reveal from "./components/Reveal";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Education from "./components/Education";
import Certs from "./components/Certs";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const PORTRAIT = { key: "portrait", src: "/portrait.jpg", alt: "Suvra Mukherjee", position: "50% 20%" };

export default function Home() {
  return (
    <>
      <Nav />
      <Reveal />
      <main id="top">
        <div className="split">
          <Stage images={[PORTRAIT]} priority />
          <div className="column">
            <Hero />
            <Stats />
            <About />
            <Experience />
          </div>
        </div>
        <Research />
        <div className="split">
          <Stage
            images={[
              { key: "kolkata", src: "/places/victoria-memorial-kolkata-at-night.jpg", alt: "Victoria Memorial in Kolkata at night", caption: "Kolkata, where the fine arts diploma was earned" },
              { key: "durgapur", src: "/places/durgapur-steel-plant-7354700090.jpg", alt: "Road past the Durgapur steel plant", caption: "Durgapur's steel township, home through school" },
            ]}
          />
          <div className="column">
            <Education />
          </div>
        </div>
        <div className="credentials">
          <Certs />
          <Skills />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
