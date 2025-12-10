import React from 'react';

const Contact = () => {
  const contactLinks = [
    {
      name: "PHONE",
      value: "(775) 376-4342",
      href: "tel:+17753764342",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      name: "EMAIL",
      value: "mohammadnazmuldev@gmail.com",
      href: "mailto:mohammadnazmuldev@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: "GITHUB",
      value: "0x57Origin",
      href: "https://github.com/0x57Origin",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: "LINKEDIN", 
      value: "Mohammad Nazmul",
      href: "https://www.linkedin.com/in/mohammad-nazmul-82012127b/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: "DEV.TO BLOG",
      value: "0x57origin",
      href: "https://dev.to/0x57origin",
      icon: (
        <span className="text-2xl">💻</span>
      )
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-cyber-dark">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title">CONTACT</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-cyber-text/80 text-base md:text-lg px-2">
              Ready to discuss cybersecurity opportunities, technical collaborations, 
              or military-to-civilian career transitions.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-card flex items-center space-x-4 hover:scale-105 transform transition-all duration-300 group"
              >
                <div className="text-cyber-green group-hover:text-glow transition-all duration-300">
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-mono text-cyber-green text-xs md:text-sm uppercase tracking-wider">
                    {link.name}
                  </h3>
                  <p className="text-cyber-text/80 text-sm md:text-base truncate">{link.value}</p>
                </div>
                <div className="flex-grow"></div>
                <div className="text-cyber-green group-hover:text-glow transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-8 md:mt-12 text-center cyber-card">
            <h3 className="font-mono text-cyber-green text-lg md:text-xl mb-4">AVAILABILITY</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-center">
              <div className="space-y-2">
                <h4 className="text-cyber-green font-mono text-sm md:text-base mb-2">FULL-TIME OPPORTUNITIES</h4>
                <p className="text-cyber-text/80 text-xs md:text-sm">Cybersecurity roles, Federal/DoD positions</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-cyber-green font-mono text-sm md:text-base mb-2">CONSULTING & CONTRACTING</h4>
                <p className="text-cyber-text/80 text-xs md:text-sm">Security assessments, tool development</p>
              </div>
              <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                <h4 className="text-cyber-green font-mono text-sm md:text-base mb-2">OPEN SOURCE</h4>
                <p className="text-cyber-text/80 text-xs md:text-sm">Nim projects, security tools, community contributions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;