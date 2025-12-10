import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-cyber-dark relative">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title text-center">ABOUT</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-mono text-cyber-green mb-3 sm:mb-4">CYBERSECURITY • MILITARY • BUSINESS</h3>
              
              <p className="text-cyber-text/90 leading-relaxed">
                U.S. Army Sergeant (13J) with hands-on experience managing AFATDS digital fire control systems, 
                SINCGARS encrypted communications, and COMSEC procedures. Leading 10-15 soldiers while operating 
                secure data systems under pressure.
              </p>
              
              <p className="text-cyber-text/90 leading-relaxed">
                Business foundation through <span className="text-cyber-green">MBA and BSBA degrees</span> provides 
                strategic planning, risk assessment, and stakeholder communication skills. This combination allows me 
                to translate technical threats into business impact and communicate solutions effectively to leadership.
              </p>
              
              <p className="text-cyber-text/90 leading-relaxed">
                Currently pursuing Masters in Cybersecurity while building practical security tools. 
                Active in the <span className="text-cyber-green">Nim programming community</span>, 
                developing open-source security solutions and contributing to technical discussions.
              </p>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="cyber-card">
                <h4 className="font-mono text-cyber-green mb-3">CLEARANCE STATUS</h4>
                <p className="text-cyber-text/80">Eligible for security clearance</p>
              </div>
              
              <div className="cyber-card">
                <h4 className="font-mono text-cyber-green mb-3">EDUCATION & CERTIFICATIONS</h4>
                <ul className="text-cyber-text/80 space-y-1 text-sm">
                  <li>• Masters in Cybersecurity (In Progress) | GPA: 4.0</li>
                  <li>• MBA - Strategic Leadership (2024) | GPA: 3.69</li>
                  <li>• BSBA - Economics & Analytics (2023) | GPA: 3.50</li>
                  <li>• Google Cybersecurity Certificate (2024)</li>
                  <li>• Google Project Management Certificate (2024)</li>
                </ul>
              </div>
              
              <div className="cyber-card">
                <h4 className="font-mono text-cyber-green mb-3">TECHNICAL HIGHLIGHTS</h4>
                <ul className="text-cyber-text/80 space-y-1">
                  <li>• Built Nim-based system scanner for configuration weaknesses</li>
                  <li>• Analyzed PCAPs to identify malicious traffic patterns</li>
                  <li>• Developed custom C binaries for reverse engineering practice</li>
                  <li>• Designed Docker-based vulnerable lab environments</li>
                  <li>• Completed 50+ hands-on cyber labs</li>
                </ul>
              </div>
              
              <div className="cyber-card">
                <h4 className="font-mono text-cyber-green mb-3">WHAT I'M WORKING ON</h4>
                <ul className="text-cyber-text/80 space-y-1">
                  <li>• Improving reverse engineering skills</li>
                  <li>• Building advanced Nim security utilities</li>
                  <li>• Studying for Security+</li>
                  <li>• Expanding VulnBox-Lite with more services</li>
                  <li>• Learning exploitation fundamentals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;