import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-cyber-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-dark to-cyber-gray/20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-mono font-bold mb-4 md:mb-6">
            <span className="text-cyber-text">MOHAMMAD </span>
            <span className="text-cyber-green text-glow">(NAZ)</span>
            <br className="sm:hidden" />
            <span className="text-cyber-text"> NAZMUL</span>
          </h1>
          
          <div className="text-sm sm:text-base md:text-xl lg:text-2xl font-mono text-cyber-text mb-6 md:mb-8 tracking-wider px-2">
            <div className="flex flex-wrap justify-center items-center gap-1 md:gap-2">
              <span className="text-cyber-green">U.S. ARMY SERGEANT (13J)</span>
              <span className="hidden sm:inline"> | </span>
              <br className="sm:hidden" />
              <span className="text-cyber-text">CYBERSECURITY</span>
              <span> | </span>
              <span className="text-cyber-text">AI</span>
              <span> | </span>
              <span className="text-cyber-text">PENTESTING</span>
              <span> | </span>
              <span className="text-cyber-text">MBA</span>
            </div>
          </div>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-cyber-text/80 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-2">
            Building security tools, analyzing networks, and advancing toward digital forensics, 
            AI research, and cybersecurity engineering.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-2">
            <a 
              href="/MAINRESUME.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button"
            >
              VIEW RESUME (PDF)
            </a>
            <a 
              href="https://github.com/0x57Origin" 
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button"
            >
              GITHUB
            </a>
            <a 
              href="https://www.linkedin.com/in/mohammad-nazmul-82012127b/" 
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button"
            >
              LINKEDIN
            </a>
            <a 
              href="https://dev.to/0x57origin" 
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button"
            >
              💻 DEV.TO BLOG
            </a>
            <a 
              href="mailto:mohammadnazmuldev@gmail.com" 
              className="cyber-button"
            >
              EMAIL
            </a>
          </div>
          
          <div className="animate-bounce">
            <svg className="w-6 h-6 md:w-8 md:h-8 mx-auto text-cyber-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-green to-transparent"></div>
    </section>
  );
};

export default Hero;