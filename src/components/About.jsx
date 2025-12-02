import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">ABOUT</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-lg md:text-xl lg:text-2xl font-mono text-cyber-green mb-4">MILITARY LEADER • BUSINESS STRATEGIST • CYBER PROFESSIONAL</h3>
              
              <p className="text-cyber-text/90 leading-relaxed">
                As a U.S. Army Sergeant (13J Fire Control Specialist), I lead 10-15 soldiers while managing 
                critical tactical systems including AFATDS and encrypted SINCGARS networks. My military leadership 
                experience has developed crisis decision-making abilities, personnel management skills, and tactical precision.
              </p>
              
              <p className="text-cyber-text/90 leading-relaxed">
                I have a strong business foundation through my <span className="text-cyber-green">MBA and BSBA degrees</span>, 
                where I developed expertise in strategic planning, financial analysis, risk management, and operations optimization. 
                This gives me a unique advantage in cybersecurity — I don't just understand threats technically, I also understand 
                their business impact, organizational risks, and how to communicate solutions to leadership and stakeholders.
              </p>
              
              <p className="text-cyber-text/90 leading-relaxed">
                Currently pursuing my Masters in Cybersecurity while building practical security tools. 
                I actively engage with the <span className="text-cyber-green">Nim programming language community</span>, 
                contributing to discussions and developing open-source security solutions that bridge technical capability with strategic value.
              </p>
              
              <p className="text-cyber-text/90 leading-relaxed">
                <span className="text-cyber-green font-semibold">Future Aspirations:</span> I plan to pursue a Juris Doctor (JD) to deepen my understanding of cyber law, 
                digital policy, and national security legislation. Long-term, I also intend to complete a PhD in cybersecurity 
                to focus on advanced research in digital forensics and AI security. These academic goals are fully supported by my 
                GI Bill benefits, enabling independent completion without requiring employer tuition assistance.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="cyber-card">
                <h4 className="font-mono text-cyber-green mb-3">CLEARANCE STATUS</h4>
                <p className="text-cyber-text/80">Eligible for security clearance</p>
              </div>
              
              <div className="cyber-card">
                <h4 className="font-mono text-cyber-green mb-3">LANGUAGES</h4>
                <p className="text-cyber-text/80">English (Native), Bangla, Hindi, Urdu</p>
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
                <h4 className="font-mono text-cyber-green mb-3">FOCUS AREAS</h4>
                <ul className="text-cyber-text/80 space-y-1">
                  <li>• Digital Forensics & Incident Response</li>
                  <li>• AI Research & Security Applications</li>
                  <li>• Penetration Testing & Vulnerability Analysis</li>
                  <li>• Open-Source Security Tool Development</li>
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