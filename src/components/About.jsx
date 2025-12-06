const About = () => {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Quality First',
      description: 'We deliver high-quality solutions that exceed expectations and stand the test of time.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'Leveraging cutting-edge technologies to create innovative solutions for modern challenges.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships through exceptional service.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Security & Trust',
      description: 'Implementing robust security measures and maintaining the highest standards of integrity.'
    }
  ];

  const achievements = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '200+', label: 'Projects Delivered' },
    { number: '50+', label: 'Satisfied Clients' },
    { number: '99%', label: 'Client Retention' }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
            About VINKS Services LLP
          </h2>
          <p className="text-xl text-secondary-600">
            Your trusted partner in digital transformation and software excellence
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-secondary-900">
              Building Digital Solutions Since 2010
            </h3>
            <p className="text-lg text-secondary-700 leading-relaxed">
              VINKS Services LLP is a leading software consulting firm specializing in delivering innovative technology solutions across diverse industries. With over 15 years of experience, we have established ourselves as a trusted partner for organizations seeking digital transformation.
            </p>
            <p className="text-lg text-secondary-700 leading-relaxed">
              Our expertise spans multiple domains including Insurance, Gas Distribution, Government IT, and International Projects. We combine deep industry knowledge with technical excellence to deliver solutions that drive real business value.
            </p>
            <p className="text-lg text-secondary-700 leading-relaxed">
              From small businesses to large enterprises and government departments, we have successfully delivered 200+ projects, helping our clients modernize their operations, improve efficiency, and stay competitive in the digital age.
            </p>

            {/* Mission & Vision */}
            <div className="pt-6 space-y-4">
              <div className="border-l-4 border-primary-600 pl-6">
                <h4 className="font-bold text-xl text-secondary-900 mb-2">Our Mission</h4>
                <p className="text-secondary-700">
                  To empower organizations with innovative software solutions that transform operations and drive sustainable growth.
                </p>
              </div>
              <div className="border-l-4 border-primary-600 pl-6">
                <h4 className="font-bold text-xl text-secondary-900 mb-2">Our Vision</h4>
                <p className="text-secondary-700">
                  To be the preferred technology partner for businesses seeking excellence in digital transformation.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Achievements */}
          <div>
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-8">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-5xl font-bold mb-2">{achievement.number}</div>
                    <div className="text-primary-100">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-secondary-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">ISO</div>
                <div className="text-sm text-secondary-700">Certified Quality</div>
              </div>
              <div className="bg-secondary-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-sm text-secondary-700">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-bold text-center text-secondary-900 mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-secondary-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-secondary-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
