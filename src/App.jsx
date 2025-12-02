import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Military from './components/Military';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-text">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Military />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;