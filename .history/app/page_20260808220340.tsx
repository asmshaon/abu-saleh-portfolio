import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Footer from "@/app/components/Footer";

export default function Page() {
  return (
    <div className="app-container">
      <ScrollProgress />
      <Navbar />
      <main className="main-content">
        <Portfolio />
        <Services />
        <Resume />
        <Footer />
      </main>
    </div>
  );
}
