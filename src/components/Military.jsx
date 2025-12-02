import React from 'react';

const Military = () => {
  const experience = [
    {
      title: "TACTICAL SYSTEMS MANAGEMENT",
      description: "Lead operation and maintenance of Advanced Field Artillery Tactical Data Systems (AFATDS), ensuring mission-critical communication systems remain operational under demanding field conditions."
    },
    {
      title: "COMMUNICATIONS SECURITY", 
      description: "Implement and maintain COMSEC protocols for encrypted SINCGARS networks, safeguarding sensitive military communications and ensuring operational security compliance."
    },
    {
      title: "TEAM LEADERSHIP",
      description: "Command and mentor teams of 10-15 soldiers, developing tactical proficiency while maintaining unit readiness and morale in high-stress operational environments."
    },
    {
      title: "FIRE CONTROL OPERATIONS",
      description: "Operate sophisticated fire control equipment and targeting systems, coordinating with multiple units to ensure precision and effectiveness in tactical operations."
    }
  ];

  const qualifications = [
    "Security Clearance Eligible",
    "13J Fire Control Specialist (MOS)",
    "Tactical Vehicle Operations", 
    "Field Communications Systems",
    "Mission Planning & Execution",
    "Emergency Response Protocols"
  ];

  return (
    <section id="military" className="py-20 bg-cyber-gray">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">MILITARY EXPERIENCE</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block">
              <h3 className="text-2xl md:text-3xl font-mono text-cyber-green mb-2">
                U.S. ARMY SERGEANT (E5)
              </h3>
              <p className="text-cyber-text/80 text-lg">
                13J Fire Control Specialist | Active Duty Service
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-cyber-green to-transparent mt-4"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {experience.map((item, index) => (
              <div key={index} className="cyber-card">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-cyber-green mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-mono text-cyber-green text-lg mb-3">{item.title}</h4>
                    <p className="text-cyber-text/80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="cyber-card text-center">
              <h3 className="font-mono text-cyber-green text-xl mb-4">CORE SYSTEMS</h3>
              <ul className="text-cyber-text/80 space-y-2">
                <li>• AFATDS (Advanced Field Artillery Tactical Data Systems)</li>
                <li>• SINCGARS (Single Channel Ground/Air Radio Systems)</li>
                <li>• COMSEC Equipment</li>
                <li>• Fire Control Computing Systems</li>
              </ul>
            </div>
            
            <div className="cyber-card text-center">
              <h3 className="font-mono text-cyber-green text-xl mb-4">LEADERSHIP IMPACT</h3>
              <ul className="text-cyber-text/80 space-y-2">
                <li>• 10-15 Soldiers Under Command</li>
                <li>• Training & Development Programs</li>
                <li>• Operational Readiness Management</li>
                <li>• Performance Evaluation & Mentoring</li>
              </ul>
            </div>
            
            <div className="cyber-card text-center">
              <h3 className="font-mono text-cyber-green text-xl mb-4">QUALIFICATIONS</h3>
              <ul className="text-cyber-text/80 space-y-2">
                {qualifications.map((qual, index) => (
                  <li key={index}>• {qual}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center cyber-card">
            <h3 className="font-mono text-cyber-green text-xl mb-4">TRANSITION TO CYBERSECURITY</h3>
            <p className="text-cyber-text/80 leading-relaxed max-w-3xl mx-auto">
              Military experience has provided a foundation of discipline, attention to detail, and operational security 
              that directly translates to cybersecurity roles. The strategic thinking developed through tactical 
              operations, combined with hands-on experience securing communication systems, creates a unique 
              perspective on information security and threat assessment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Military;