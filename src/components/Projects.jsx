import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Flag_Hunt",
      description: "A small C binary filled with five beginner-friendly reverse engineering challenges that teach basic Ghidra skills, XOR decoding, and simple logic analysis.",
      tech: ["C", "Reverse Engineering", "Ghidra"],
      github: "https://github.com/0x57Origin/Flag_Hunt",
      status: "Active"
    },
    {
      title: "PenTest-WriteUps",
      description: "My personal library of cybersecurity writeups, notes, and learning progress & TryHackMe!",
      tech: ["C++", "Documentation", "CTF Writeups"],
      github: "https://github.com/0x57Origin/PenTest-WriteUps",
      status: "Active"
    },
    {
      title: "RE_VAULT",
      description: "Repository for all my reverse-engineering work, including custom challenges, training artifacts, and experimental C-based obfuscation projects & Malware Development & Analysis.",
      tech: ["C", "Reverse Engineering", "Malware Analysis"],
      github: "https://github.com/0x57Origin/RE_VAULT",
      status: "Active"
    },
    {
      title: "NimPacket",
      description: "NimPacket is a packet manipulation library that lets you build, parse, and work with network protocols (IPv4, TCP, UDP, ICMP) as structured data instead of raw bytes.",
      tech: ["Nim", "Network Programming", "Packet Analysis"],
      github: "https://github.com/0x57Origin/NimPacket",
      status: "Active"
    }
  ];

  const openProject = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-cyber-gray relative">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title text-center">PROJECTS</h2>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-cyber-text/80 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 px-2">
              <span className="text-cyber-green">Hands-on security projects</span> showcasing practical cybersecurity skills and tool development.
              Each project demonstrates real technical implementation and learning through building.
            </p>
            <p className="text-cyber-text/60 text-sm sm:text-base px-2">
              Building security tools and learning through hands-on development and documentation.
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <div key={index} className="project-card group" onClick={() => openProject(project.github)}>
                <div className="relative z-10">
                  <div className="flex flex-col xs:flex-row xs:justify-between xs:items-start mb-4 sm:mb-6 space-y-2 xs:space-y-0">
                    <h3 className="text-lg xs:text-xl font-mono text-cyber-green group-hover:text-glow transition-all duration-300 pr-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center">
                      <span className="px-2 xs:px-3 py-1 text-xs font-mono bg-cyber-green/20 text-cyber-green border border-cyber-green/30 rounded-none whitespace-nowrap">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-cyber-text/90 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 xs:px-3 py-1 text-xs font-mono bg-cyber-dark/60 border border-cyber-green/20 text-cyber-text/80 rounded-none"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-cyber-green/20">
                    <div className="flex items-center space-x-2 text-cyber-text/60 text-xs sm:text-sm font-mono">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                      <span className="hidden xs:inline">REPOSITORY</span>
                      <span className="xs:hidden">REPO</span>
                    </div>
                    
                    <div className="text-cyber-green group-hover:text-glow transition-all duration-300">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/0x57Origin" 
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button"
            >
              VIEW ALL PROJECTS ON GITHUB
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;