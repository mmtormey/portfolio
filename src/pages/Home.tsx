import Navigation from "../components/Navigation.tsx";
import Hero from "../components/Hero.tsx";
import ProjectGrid from "../components/ProjectGrid.tsx";
import About from "../components/About.tsx";
import Footer from "../components/Footer.tsx";

function Home() {
  return (
    <>
      <Navigation />

      <main>
        <Hero />
        <ProjectGrid />
        <About />
      </main>

      <Footer />
    </>
  );
}

export default Home;