import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Approach from "./components/Approach";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className="min-h-full">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Approach />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
