import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "BUSINESS & STRATEGIC LEADERSHIP",
      icon: "📊", 
      skills: [
        "Strategic Planning & Analysis",
        "Financial Modeling & Budget Forecasting", 
        "Earned Value Management (EVM)",
        "Risk Assessment & Mitigation",
        "Operations Management & Optimization",
        "Business Intelligence & Analytics",
        "Market Research & Competitive Analysis",
        "Project Management (Google Certified)",
        "Stakeholder Communication",
        "Supply Chain & Logistics",
        "Performance Evaluation & Metrics",
        "Corporate Policy & Compliance"
      ]
    },
    {
      title: "MILITARY LEADERSHIP & OPERATIONS", 
      icon: "⚔️",
      skills: [
        "Personnel Management (10-15 Soldiers)",
        "Crisis Decision Making Under Pressure",
        "AFATDS Fire Control Systems",
        "COMSEC & Communications Security",
        "SINCGARS Encrypted Networks",
        "Tactical Vehicle Operations",
        "Mission Planning & Execution",
        "Training Development & Mentoring",
        "Equipment Maintenance & Logistics",
        "Security Clearance Operations",
        "Field Operations & Combat Readiness",
        "Performance Evaluation Leadership"
      ]
    },
    {
      title: "CYBERSECURITY & TECHNICAL",
      icon: "🛡️",
      skills: [
        "Network Vulnerability Assessment",
        "Penetration Testing & Red Teaming",
        "Digital Forensics & Incident Response", 
        "SIEM Development & Log Analysis",
        "Python & Nim Programming",
        "Linux System Administration",
        "Windows Server & Active Directory",
        "Wireshark Packet Analysis",
        "Docker & Containerization",
        "Git Version Control",
        "Reverse Engineering (Ghidra)",
        "Network Security Architecture"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">SKILLS & EXPERTISE</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyber-text/80 text-lg mb-4">
              <span className="text-cyber-green">Rare triple threat combination:</span> Military leadership experience, 
              MBA-level business strategy, and hands-on cybersecurity expertise.
            </p>
            <p className="text-cyber-text/60">
              Most cyber professionals understand only technical threats. Most business leaders lack cyber expertise. 
              I bridge both domains with proven leadership experience.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="cyber-card h-full">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-xl font-mono text-cyber-green">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center space-x-3 p-2 hover:bg-cyber-gray/50 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-cyber-green"></div>
                      <span className="text-cyber-text/90 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="cyber-card text-center">
              <h3 className="text-xl font-mono text-cyber-green mb-4">LEADERSHIP ADVANTAGE</h3>
              <p className="text-cyber-text/80 mb-4">Military + Business leadership experience:</p>
              <ul className="text-cyber-text/70 space-y-2">
                <li>• 10-15 Soldier Team Leadership</li>
                <li>• MBA Strategic Planning</li>
                <li>• Crisis Decision Making</li>
                <li>• Budget & Resource Management</li>
                <li>• Performance Evaluation</li>
              </ul>
            </div>
            
            <div className="cyber-card text-center">
              <h3 className="text-xl font-mono text-cyber-green mb-4">EDUCATION PIPELINE</h3>
              <p className="text-cyber-text/80 mb-4">Advanced degrees (GI Bill funded):</p>
              <ul className="text-cyber-text/70 space-y-2">
                <li>• Master's Cybersecurity (In Progress)</li>
                <li>• JD Cyber Law (Planned)</li>
                <li>• PhD Cybersecurity Research (Planned)</li>
                <li>• Google PM Certificate (Complete)</li>
                <li>• Security+ (In Progress)</li>
              </ul>
            </div>
            
            <div className="cyber-card text-center">
              <h3 className="text-xl font-mono text-cyber-green mb-4">STRATEGIC VALUE</h3>
              <p className="text-cyber-text/80 mb-4">Unique positioning for senior roles:</p>
              <ul className="text-cyber-text/70 space-y-2">
                <li>• Technical → Business Translation</li>
                <li>• Risk Communication to C-Suite</li>
                <li>• Policy & Compliance Understanding</li>
                <li>• Future Leadership Potential</li>
                <li>• Defense Contractor Ready</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;