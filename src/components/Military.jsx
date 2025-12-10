import React from 'react';

const Military = () => {
  const experience = [
    {
      title: "AFATDS SYSTEMS",
      description: "Operate and troubleshoot Advanced Field Artillery Tactical Data Systems for fire control data accuracy and digital communications."
    },
    {
      title: "SECURE COMMUNICATIONS", 
      description: "Maintain COMSEC procedures and encrypted SINCGARS networks for secure military communications and operational security."
    },
    {
      title: "TEAM LEADERSHIP",
      description: "Lead and train 10-15 soldiers in technical systems, documentation procedures, and operating digital systems under pressure."
    },
    {
      title: "SYSTEM TROUBLESHOOTING",
      description: "Diagnose and resolve technical issues with fire control systems, communications equipment, and secure data operations."
    }
  ];

  return (
    <section id="military" className="py-16 sm:py-20 lg:py-24 bg-cyber-gray relative">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title text-center">MILITARY EXPERIENCE</h2>
        
        <div className="max-w-7xl mx-auto">
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
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
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
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="cyber-card text-center">
              <h3 className="font-mono text-cyber-green text-xl mb-4">TECHNICAL SYSTEMS</h3>
              <ul className="text-cyber-text/80 space-y-2">
                <li>• AFATDS digital fire control systems</li>
                <li>• SINCGARS encrypted communications</li>
                <li>• COMSEC procedures</li>
                <li>• Fire control data accuracy</li>
                <li>• System troubleshooting</li>
                <li>• Technical documentation</li>
              </ul>
            </div>
            
            <div className="cyber-card text-center">
              <h3 className="font-mono text-cyber-green text-xl mb-4">OPERATIONAL EXPERIENCE</h3>
              <ul className="text-cyber-text/80 space-y-2">
                <li>• Leading 10-15 soldiers</li>
                <li>• Secure communications</li>
                <li>• Operating under pressure</li>
                <li>• Technical training delivery</li>
                <li>• Equipment maintenance</li>
                <li>• Security clearance eligible</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Military;