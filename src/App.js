import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import ThemeToggle from './components/ThemeToggle';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Helmet>
        <title>Shashank Tripathi - Full Stack Developer Portfolio</title>
        <meta name="description" content="Full Stack Developer specializing in React, Node.js, and modern web technologies. View my portfolio of projects and get in touch for collaborations." />
        <meta name="keywords" content="Shashank Tripathi, Full Stack Developer, React Developer, Node.js Developer, Web Developer, MERN Stack, JavaScript, TypeScript" />
        <meta name="author" content="Shashank Tripathi" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Shashank Tripathi - Full Stack Developer Portfolio" />
        <meta property="og:description" content="Full Stack Developer specializing in React, Node.js, and modern web technologies. View my portfolio of projects and get in touch for collaborations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shashanktripathi.dev" />
        <meta property="og:image" content="https://shashanktripathi.dev/og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shashank Tripathi - Full Stack Developer Portfolio" />
        <meta name="twitter:description" content="Full Stack Developer specializing in React, Node.js, and modern web technologies. View my portfolio of projects and get in touch for collaborations." />
        <meta name="twitter:image" content="https://shashanktripathi.dev/og-image.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Shashank Tripathi",
            "jobTitle": "Full Stack Developer",
            "url": "https://shashanktripathi.dev",
            "sameAs": [
              "https://github.com/STripathi0905",
              "https://www.linkedin.com/in/shashank-tripathi09/"
            ],
            "knowsAbout": ["React", "Node.js", "JavaScript", "TypeScript", "MongoDB", "Express.js"]
          })}
        </script>
      </Helmet>
      
      <AnimatePresence mode="wait">
        {isLoading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LoadingScreen />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-primary counter-reset relative"
        >
          <ParticleBackground />
          <Navbar />
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <main className="relative z-10">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Education />
            <Contact />
          </main>
          <motion.footer 
            className="py-8 bg-tertiary/30 border-t border-quaternary/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="container mx-auto px-4 text-center">
              <motion.div 
                className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-gray-400">
                  <p className="font-mono text-sm">
                    Designed & Built by Shashank Tripathi
                  </p>
                </div>
                <div className="flex items-center space-x-6 text-gray-400">
                  <a 
                    href="#hero" 
                    className="font-mono text-sm hover:text-secondary transition-colors duration-300"
                  >
                    Back to Top ↑
                  </a>
                </div>
              </motion.div>
              <motion.div 
                className="mt-4 text-xs text-gray-500 font-mono"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                © {new Date().getFullYear()} Shashank Tripathi. All rights reserved.
              </motion.div>
            </div>
          </motion.footer>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}

export default App;
