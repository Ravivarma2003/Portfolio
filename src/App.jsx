import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <FAQ />
        <Contact />
      </main>
      <footer>
        &copy; 2024 Startvith. All rights reserved.
      </footer>
    </>
  );
}
