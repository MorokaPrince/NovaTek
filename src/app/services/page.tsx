import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20 lg:py-32 overflow-hidden">
        {/* Dark Coding Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

          {/* Scattered Coding Elements */}
          <div className="absolute top-20 left-20 text-blue-400/10 text-sm animate-float">{"function"} services() {"{"};</div>
          <div className="absolute top-40 right-32 text-green-400/10 text-sm animate-pulse">{"const"} solutions;</div>
          <div className="absolute bottom-32 left-16 text-purple-400/10 text-sm animate-bounce">return results;</div>
          <div className="absolute bottom-20 right-20 text-cyan-400/10 text-sm animate-float">{"}"}</div>
          <div className="absolute top-1/2 left-10 text-yellow-400/10 text-sm animate-pulse">{"await"} deploy();</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-full text-gray-300 text-sm font-medium tracking-wider uppercase border border-gray-600/50 shadow-lg">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse-glow"></span>
                Our Services
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight animate-fade-in-up">
              Comprehensive
              <br />
              <span className="font-medium relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                technology
                <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-scale-in shadow-lg"></div>
              </span>
              <br />
              consulting
              <br />
              <span className="font-medium text-green-400">solutions</span>.
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in-up">
              From strategy to execution, we provide <span className="font-medium text-white">end-to-end technology consulting</span> services
              that drive <span className="font-medium text-green-400">measurable business outcomes</span> and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 overflow-hidden bg-gray-900">
        {/* Dark Coding Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

          {/* Scattered Coding Text Elements */}
          <div className="absolute top-10 left-20 text-green-400/10 text-sm animate-float">{"const"} solution = {"{"};</div>
          <div className="absolute top-32 right-32 text-blue-400/10 text-sm animate-pulse">{"function"} deploy() {"{"};</div>
          <div className="absolute bottom-32 left-16 text-purple-400/10 text-sm animate-bounce">return success;</div>
          <div className="absolute bottom-16 right-20 text-cyan-400/10 text-sm animate-float">{"}"}</div>
          <div className="absolute top-1/2 left-10 text-yellow-400/10 text-sm animate-pulse">console.log()</div>
          <div className="absolute top-1/3 right-10 text-pink-400/10 text-sm animate-float">{"await"} database.connect()</div>
          <div className="absolute top-1/4 left-1/3 text-orange-400/10 text-sm animate-bounce">{"if"} (condition) {"{"}</div>
          <div className="absolute bottom-1/3 right-1/4 text-red-400/10 text-sm animate-pulse">{"}"} else {"{"}</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Technology Consulting */}
            <div className="group relative bg-gray-800/50 backdrop-blur-sm p-8 lg:p-12 rounded-2xl border border-gray-700/50 hover:bg-gray-700/60 hover:border-gray-600/70 transition-all duration-500 hover-lift animate-slide-in-left overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-2xl shadow-blue-500/25">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>

                <h2 className="text-3xl md:text-4xl font-light text-white mb-6 group-hover:text-blue-300 transition-colors duration-300">
                  Technology
                  <br />
                  <span className="font-medium text-blue-400">Consulting</span>
                </h2>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Strategic technology guidance to help you make informed decisions and stay ahead of the competition.
                  We provide comprehensive analysis and recommendations tailored to your business objectives.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center animate-fade-in-up">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4"></div>
                    <span className="text-gray-300 group-hover:text-blue-300 transition-colors duration-300">Technology strategy development</span>
                  </div>
                  <div className="flex items-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4"></div>
                    <span className="text-gray-300 group-hover:text-purple-300 transition-colors duration-300">Digital transformation roadmaps</span>
                  </div>
                  <div className="flex items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-4"></div>
                    <span className="text-gray-300 group-hover:text-green-300 transition-colors duration-300">System architecture planning</span>
                  </div>
                  <div className="flex items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-4"></div>
                    <span className="text-gray-300 group-hover:text-orange-300 transition-colors duration-300">Vendor evaluation and selection</span>
                  </div>
                </div>

                <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 text-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover-lift rounded-xl shadow-lg shadow-blue-500/25">
                  <span className="flex items-center">
                    Learn More
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Digital Transformation */}
            <div className="group relative bg-gray-800/50 backdrop-blur-sm p-8 lg:p-12 rounded-2xl border border-gray-700/50 hover:bg-gray-700/60 hover:border-gray-600/70 transition-all duration-500 hover-lift animate-slide-in-right overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 shadow-2xl shadow-purple-500/25">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <h2 className="text-3xl md:text-4xl font-light text-white mb-6 group-hover:text-purple-300 transition-colors duration-300">
                  Digital
                  <br />
                  <span className="font-medium text-purple-400">Transformation</span>
                </h2>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Transform your business processes with cutting-edge digital solutions tailored to your unique needs.
                  We help you leverage technology to improve efficiency and customer experience.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center animate-fade-in-up">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4"></div>
                    <span className="text-gray-300 group-hover:text-purple-300 transition-colors duration-300">Process automation and optimization</span>
                  </div>
                  <div className="flex items-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-4"></div>
                    <span className="text-gray-300 group-hover:text-blue-300 transition-colors duration-300">Cloud migration strategies</span>
                  </div>
                  <div className="flex items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-4"></div>
                    <span className="text-gray-300 group-hover:text-green-300 transition-colors duration-300">Customer experience enhancement</span>
                  </div>
                  <div className="flex items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-4"></div>
                    <span className="text-gray-300 group-hover:text-orange-300 transition-colors duration-300">Data analytics implementation</span>
                  </div>
                </div>

                <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 text-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover-lift rounded-xl shadow-lg shadow-purple-500/25">
                  <span className="flex items-center">
                    Learn More
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Project Management */}
            <div className="group relative bg-gray-800/50 backdrop-blur-sm p-8 lg:p-12 rounded-2xl border border-gray-700/50 hover:bg-gray-700/60 hover:border-gray-600/70 transition-all duration-500 hover-lift animate-fade-in-up overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-2xl shadow-green-500/25">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>

                <h2 className="text-3xl md:text-4xl font-light text-white mb-6 group-hover:text-green-300 transition-colors duration-300">
                  Project
                  <br />
                  <span className="font-medium text-green-400">Management</span>
                </h2>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Expert project management services to ensure successful delivery of your technology initiatives.
                  We combine proven methodologies with agile practices for optimal results.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center animate-fade-in-up">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-4"></div>
                    <span className="text-gray-300 group-hover:text-green-300 transition-colors duration-300">Agile project management</span>
                  </div>
                  <div className="flex items-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-4"></div>
                    <span className="text-gray-300 group-hover:text-blue-300 transition-colors duration-300">Risk assessment and mitigation</span>
                  </div>
                  <div className="flex items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4"></div>
                    <span className="text-gray-300 group-hover:text-purple-300 transition-colors duration-300">Resource planning and allocation</span>
                  </div>
                  <div className="flex items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-4"></div>
                    <span className="text-gray-300 group-hover:text-orange-300 transition-colors duration-300">Stakeholder communication</span>
                  </div>
                </div>

                <button className="group bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 text-lg font-medium hover:from-green-700 hover:to-teal-700 transition-all duration-300 hover-lift rounded-xl shadow-lg shadow-green-500/25">
                  <span className="flex items-center">
                    Learn More
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Custom Development */}
            <div className="group relative bg-gray-800/50 backdrop-blur-sm p-8 lg:p-12 rounded-2xl border border-gray-700/50 hover:bg-gray-700/60 hover:border-gray-600/70 transition-all duration-500 hover-lift animate-fade-in-up overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 shadow-2xl shadow-orange-500/25">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>

                <h2 className="text-3xl md:text-4xl font-light text-white mb-6 group-hover:text-orange-300 transition-colors duration-300">
                  Custom
                  <br />
                  <span className="font-medium text-orange-400">Development</span>
                </h2>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Bespoke software development solutions designed specifically for your business requirements.
                  We build scalable, maintainable applications that grow with your needs.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center animate-fade-in-up">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-4"></div>
                    <span className="text-gray-300 group-hover:text-orange-300 transition-colors duration-300">Web application development</span>
                  </div>
                  <div className="flex items-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-4"></div>
                    <span className="text-gray-300 group-hover:text-blue-300 transition-colors duration-300">Mobile app development</span>
                  </div>
                  <div className="flex items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4"></div>
                    <span className="text-gray-300 group-hover:text-purple-300 transition-colors duration-300">API development and integration</span>
                  </div>
                  <div className="flex items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-4"></div>
                    <span className="text-gray-300 group-hover:text-green-300 transition-colors duration-300">Legacy system modernization</span>
                  </div>
                </div>

                <button className="group bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 text-lg font-medium hover:from-orange-700 hover:to-red-700 transition-all duration-300 hover-lift rounded-xl shadow-lg shadow-orange-500/25">
                  <span className="flex items-center">
                    Learn More
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light mb-6 animate-fade-in-up">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-12 animate-fade-in-up">
            Let&apos;s discuss your project requirements and how we can help you achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <button className="group bg-white text-gray-900 px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-all duration-300 hover-lift">
              <span className="flex items-center">
                Start Your Project
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
            </button>
            <button className="group border-2 border-gray-600 text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 hover-lift">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Schedule Consultation
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;