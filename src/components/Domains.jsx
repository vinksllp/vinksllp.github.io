const Domains = () => {
  const domains = [
    {
      title: 'Insurance',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: 'Comprehensive insurance management systems for policy administration, claims processing, and customer portals.',
      solutions: [
        'Policy Management Systems',
        'Claims Processing Automation',
        'Agent Portals',
        'Customer Self-Service Platforms',
        'Regulatory Compliance Tools'
      ],
      stats: { clients: '25+', projects: '60+' }
    },
    {
      title: 'Gas Distribution',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: 'Advanced distribution management systems for gas agencies with real-time tracking and automated billing.',
      solutions: [
        'Distribution Network Management',
        'Inventory Tracking Systems',
        'Automated Billing Solutions',
        'Delivery Route Optimization',
        'Customer Management Portals'
      ],
      stats: { clients: '15+', projects: '40+' }
    },
    {
      title: 'Government',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      description: 'Secure and scalable e-governance solutions for government departments and public service delivery.',
      solutions: [
        'Citizen Services Portals',
        'Document Management Systems',
        'Workflow Automation',
        'Data Analytics Platforms',
        'Security & Compliance Solutions'
      ],
      stats: { clients: '10+', projects: '35+' }
    },
    {
      title: 'International Clients',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Cross-border software solutions with multi-language support and compliance with international standards.',
      solutions: [
        'Multi-tenant SaaS Platforms',
        'Localization & Translation',
        'Global Payment Integration',
        'Compliance Management',
        'Cloud Infrastructure Setup'
      ],
      stats: { clients: '20+', projects: '65+' }
    }
  ];

  return (
    <section id="domains" className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
            Industry Expertise
          </h2>
          <p className="text-xl text-secondary-600">
            Specialized solutions across diverse industry domains with proven track records
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-primary-600">
                      {domain.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-secondary-900">
                      {domain.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">{domain.stats.clients}</div>
                    <div className="text-sm text-secondary-600">Clients</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-secondary-600 mb-6">
                  {domain.description}
                </p>

                {/* Solutions List */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-secondary-900 mb-3">Key Solutions:</h4>
                  {domain.solutions.map((solution, idx) => (
                    <div key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-secondary-700">{solution}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Footer */}
                <div className="mt-6 pt-6 border-t border-secondary-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-secondary-600">Projects Completed</span>
                    <span className="font-bold text-primary-600">{domain.stats.projects}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-2xl shadow-lg p-12">
          <h3 className="text-3xl font-bold text-secondary-900 mb-4">
            Don't See Your Industry?
          </h3>
          <p className="text-xl text-secondary-600 mb-8">
            We adapt our solutions to various sectors. Let's discuss your specific needs.
          </p>
          <button
            onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Domains;
