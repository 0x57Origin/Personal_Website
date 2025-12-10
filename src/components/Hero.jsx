import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-cyber-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-dark to-cyber-gray/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-mono font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
            <span className="text-cyber-text">MOHAMMAD </span>
            <span className="text-cyber-green text-glow">(NAZ)</span>
            <br />
            <span className="text-cyber-text">NAZMUL</span>
          </h1>
          
          <div className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-mono text-cyber-text mb-6 sm:mb-8 md:mb-10 tracking-wide">
            <div className="space-y-2 sm:space-y-0 sm:flex sm:flex-wrap sm:justify-center sm:items-center sm:gap-2 md:gap-4">
              <div className="flex justify-center items-center gap-2">
                <span className="text-cyber-text">Cybersecurity</span>
                <span className="text-cyber-green/60"> • </span>
                <span className="text-cyber-text">AI</span>
                <span className="text-cyber-green/60"> • </span>
                <span className="text-cyber-text">Pentesting</span>
              </div>
              <div className="text-cyber-green font-semibold text-center">
                U.S. Army Sergeant | Developer | MBA
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-14 px-2">
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-cyber-text/90 leading-relaxed mb-3">
              Hands on experience in vulnerability analysis, scripting, packet analysis, secure systems, and digital operations.
            </p>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-cyber-text/90 leading-relaxed">
              Building security tools in Python, C, and Nim. Strong foundation in technical problem solving, military precision, and business strategy.
            </p>
          </div>
          
          <div className="flex flex-col xs:flex-row xs:flex-wrap justify-center gap-3 sm:gap-4 mb-8 md:mb-12 px-2">
            <a 
              href="/MasterResume.pdf" 
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