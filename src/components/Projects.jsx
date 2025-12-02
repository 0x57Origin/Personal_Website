import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "KaliSentry",
      description: "A fast Nim-based security health checker for Kali Linux. It scans for common misconfigurations like weak SSH settings, disabled firewalls, outdated services, DNS issues, and permission mistakes.",
      tech: ["Nim", "Linux Security", "System Hardening"],
      github: "https://github.com/0x57Origin/KaliSentry",
      status: "Active"
    },
    {
      title: "VulnBox-Lite",
      description: "A small Docker-based vulnerable web app designed for beginners learning penetration testing. Includes 10 intentionally vulnerable services and hidden flags that help users practice enumeration, exploitation, and web attack basics.",
      tech: ["Docker", "Web Security", "Training Environment Design"],
      github: "https://github.com/0x57Origin/VulnBox-Lite",
      status: "Active"
    },
    {
      title: "Flag_Hunt",
      description: "A tiny C binary containing five beginner-friendly reverse engineering challenges. Teaches fundamentals like XOR decoding, simple logic flows, custom hashing, and intro binary analysis using Ghidra.",
      tech: ["Reverse Engineering", "C Programming", "Ghidra"],
      github: "https://github.com/0x57Origin/Flag_Hunt",
      status: "Active"
    },
    {
      title: "PenTest-WriteUps",
      description: "A collection of personal notes, walkthroughs, and explanations from hands-on security labs. Demonstrates clear documentation, analytical thinking, and communication of technical concepts.",
      tech: ["Documentation", "Cyber Analysis", "Pentesting Fundamentals"],
      github: "https://github.com/0x57Origin/PenTest-WriteUps",
      status: "Maintained"
    }
  ];

  const openProject = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 bg-cyber-gray">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">PROJECTS</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyber-text/80 text-lg mb-4">
              <span className="text-cyber-green">Hands-on security projects</span> showcasing practical cybersecurity skills and tool development.
              Each project demonstrates real technical implementation and learning through building.
            </p>
            <p className="text-cyber-text/60">
              Building security tools and learning through hands-on development and documentation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="cyber-card group cursor-pointer" onClick={() => openProject(project.github)}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-mono text-cyber-green group-hover:text-glow transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs font-mono ${
                      project.status === 'Active' 
                        ? 'bg-cyber-green/20 text-cyber-green border border-cyber-green/30' 
                        : 'bg-cyber-text/20 text-cyber-text border border-cyber-text/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                
                <p className="text-cyber-text/80 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-xs font-mono bg-cyber-dark border border-cyber-gray text-cyber-text/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-cyber-gray">
                  <div className="flex items-center space-x-2 text-cyber-text/60 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    <span>GitHub</span>
                  </div>
                  
                  <div className="text-cyber-green group-hover:text-glow transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
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