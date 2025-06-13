import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Projects from "@/components/Projects";

export default function HomePage() {
  return (
    <>
      <div className="w-10/12 mx-auto">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  );
}
