import Sidebar from './components/Sidebar';
import ScrollProgress from './components/ScrollProgress';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';

export default function Page() {
  return (
    <div className="app-container">
      <ScrollProgress />
      <Sidebar />
      <main className="main-content">
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
      </main>
    </div>
  );
}
