import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "CYBERSECURITY",
      skills: [
        "Network vulnerability assessment",
        "Pentesting fundamentals",
        "Wireshark packet analysis",
        "Linux system administration",
        "Docker security and containerization",
        "Reverse engineering basics (Ghidra)",
        "Tool development (Python, C, Nim)",
        "Incident response fundamentals",
        "Log analysis"
      ]
    },
    {
      title: "PROGRAMMING",
      skills: [
        "Python",
        "C",
        "C++",
        "Nim"
      ]
    },
    {
      title: "MILITARY TECHNICAL",
      skills: [
        "AFATDS digital fire control systems",
        "SINCGARS encrypted communications",
        "COMSEC procedures",
        "Secure data operations",
        "Team leadership and training"
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-cyber-dark relative">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title text-center">SKILLS & EXPERTISE</h2>
        
        <div className="max-w-7xl mx-auto">          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="cyber-card h-full">
                <div className="text-center mb-6">
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
        </div>
      </div>
    </section>
  );
};

export default Skills;