const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary-50 via-white to-primary-50 pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-secondary-900 leading-tight">
                Software Solutions
                <span className="block text-gradient">That Transform</span>
                Your Business
              </h1>
              <p className="text-xl text-secondary-600 leading-relaxed">
                Expert consulting services for Cooperative Societies, Gas Distribution, Government Departments, and International Clients
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
              >
                Explore Services
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-secondary-200">
              <div>
                <div className="text-4xl font-bold text-primary-600">25+</div>
                <div className="text-secondary-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600">450+</div>
                <div className="text-secondary-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600">350+</div>
                <div className="text-secondary-600">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-secondary-600">Trusted By</div>
                    <div className="text-xl font-bold text-secondary-900">Industry Leaders</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                    <span className="text-secondary-700">Cooperative Societies</span>
                    <span className="text-primary-600 font-semibold">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                    <span className="text-secondary-700">Gas Distribution</span>
                    <span className="text-primary-600 font-semibold">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                    <span className="text-secondary-700">Government IT</span>
                    <span className="text-primary-600 font-semibold">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                    <span className="text-secondary-700">International Projects</span>
                    <span className="text-primary-600 font-semibold">✓</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
