import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Education from "./components/Education";
import Certs from "./components/Certs";
import Skills from "./components/Skills";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" style={{ overflowX: "hidden" }}>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Research />
        <Education />
        <Certs />
        <Skills />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
