import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'PROJECTS', id: 'projects' },
    { name: 'SKILLS', id: 'skills' },
    { name: 'MILITARY', id: 'military' },
    { name: 'CONTACT', id: 'contact' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cyber-dark/95 backdrop-blur-sm border-b border-cyber-green/20' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-mono text-cyber-green text-lg md:text-xl tracking-wider">
              NAZ.DEV
            </div>
            
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-cyber-text hover:text-cyber-green transition-colors duration-300 font-mono text-sm tracking-wider"
                >
                  {item.name}
                </button>
              ))}
            </div>
            
            <button 
              className="md:hidden text-cyber-green hover:text-glow transition-all duration-300 p-2 z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden" style={{backgroundColor: 'rgba(10, 10, 10, 0.95)'}}>
          <div className="flex flex-col h-full justify-center items-center p-8">
            <div className="space-y-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-cyber-text hover:text-cyber-green transition-colors duration-300 font-mono text-xl tracking-wider text-center py-4 px-8 border border-cyber-gray hover:border-cyber-green rounded-lg"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;