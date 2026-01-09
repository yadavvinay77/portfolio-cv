import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Education from './components/Education';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen text-[color:var(--ink)]">
      <div
        className="pointer-events-none fixed -top-24 right-[-6rem] h-80 w-80 rounded-full bg-[color:var(--accent)] opacity-20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed bottom-[-8rem] left-[-4rem] h-80 w-80 rounded-full bg-[color:var(--sunset)] opacity-20 blur-3xl"
        aria-hidden="true"
      />
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Publications />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
