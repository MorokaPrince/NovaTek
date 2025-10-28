import React from 'react';

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20 lg:py-32 overflow-hidden">
        {/* Dark Coding Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

          {/* Scattered Coding Elements */}
          <div className="absolute top-20 left-20 text-green-400/10 text-sm animate-float">{"const"} caseStudy = {"{"};</div>
          <div className="absolute top-40 right-32 text-blue-400/10 text-sm animate-pulse">{"function"} analyze() {"{"};</div>
          <div className="absolute bottom-32 left-16 text-purple-400/10 text-sm animate-bounce">return results;</div>
          <div className="absolute bottom-20 right-20 text-cyan-400/10 text-sm animate-float">{"}"}</div>
          <div className="absolute top-1/2 left-10 text-yellow-400/10 text-sm animate-pulse">success.rate++</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-full text-gray-300 text-sm font-medium tracking-wider uppercase border border-gray-600/50 shadow-lg">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse-glow"></span>
                Case Studies
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight animate-fade-in-up">
              Success
              <br />
              <span className="font-medium relative text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                stories
                <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-scale-in shadow-lg"></div>
              </span> from
              <br />
              our
              <br />
              <span className="font-medium text-purple-400">clients</span>.
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in-up">
              Discover how we&apos;ve helped businesses across various industries achieve their <span className="font-medium text-green-400">digital transformation goals</span>
              and drive <span className="font-medium text-blue-400">sustainable growth</span> through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="relative py-20 overflow-hidden bg-gray-900">
        {/* Enhanced Dark Coding Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

          {/* Advanced Scattered Coding Elements */}
          <div className="absolute top-10 left-20 text-green-400/10 text-sm animate-float">{"const"} caseStudy = {"{"};</div>
          <div className="absolute top-32 right-32 text-blue-400/10 text-sm animate-pulse">{"function"} analyze() {"{"};</div>
          <div className="absolute bottom-32 left-16 text-purple-400/10 text-sm animate-bounce">return results;</div>
          <div className="absolute bottom-16 right-20 text-cyan-400/10 text-sm animate-float">{"}"}</div>
          <div className="absolute top-1/2 left-10 text-yellow-400/10 text-sm animate-pulse">success.rate++</div>
          <div className="absolute top-1/3 right-10 text-pink-400/10 text-sm animate-float">{"if"} (deployed) {"{"}</div>
          <div className="absolute top-1/4 left-1/3 text-orange-400/10 text-sm animate-bounce">{"}"} else {"{"}</div>
          <div className="absolute bottom-1/3 right-1/4 text-red-400/10 text-sm animate-pulse">{"throw"} error;</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Case Study 1 */}
            <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:bg-gray-700/60 hover:border-gray-600/70 transition-all duration-500 hover-lift animate-slide-in-left overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="mb-8 relative overflow-hidden rounded-xl">
                <div className="w-full h-64 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl mb-6 flex items-center justify-center border border-gray-700/50">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center animate-bounce shadow-2xl shadow-blue-500/25">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-blue-300 font-medium">E-commerce Project</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                    Digital Transformation
                  </span>
                  <span className="text-gray-400 text-sm animate-pulse">2024</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-light text-white group-hover:text-blue-300 transition-colors duration-300">
                  E-commerce Platform
                  <br />
                  <span className="font-medium text-blue-400">Modernization</span>
                </h3>

                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Helped a leading retail company modernize their legacy e-commerce platform, resulting in
                  150% increase in online sales and improved customer experience through microservices architecture.
                </p>

                <div className="flex items-center justify-between pt-4">
                  <div className="text-sm text-gray-400">
                    <span className="font-medium text-green-400">Results:</span> 150% sales increase, 60% faster load times
                  </div>
                  <button className="group text-gray-300 font-medium hover:text-blue-300 transition-colors duration-300">
                    <span className="flex items-center">
                      Read More
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:bg-gray-700/60 hover:border-gray-600/70 transition-all duration-500 hover-lift animate-slide-in-right overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="mb-8 relative overflow-hidden rounded-xl">
                <div className="w-full h-64 bg-gradient-to-br from-green-900/20 to-teal-900/20 rounded-xl mb-6 flex items-center justify-center border border-gray-700/50">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center animate-float shadow-2xl shadow-green-500/25">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                      </svg>
                    </div>
                    <p className="text-green-300 font-medium">Cloud Migration</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                    Cloud Migration
                  </span>
                  <span className="text-gray-400 text-sm animate-pulse">2024</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-light text-white group-hover:text-green-300 transition-colors duration-300">
                  Financial Services
                  <br />
                  <span className="font-medium text-green-400">Cloud Migration</span>
                </h3>

                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Successfully migrated a traditional financial institution to a modern cloud infrastructure,
                  reducing operational costs by 40% while improving system reliability and scalability.
                </p>

                <div className="flex items-center justify-between pt-4">
                  <div className="text-sm text-gray-400">
                    <span className="font-medium text-green-400">Results:</span> 40% cost reduction, 99.9% uptime
                  </div>
                  <button className="group text-gray-300 font-medium hover:text-green-300 transition-colors duration-300">
                    <span className="flex items-center">
                      Read More
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:bg-gray-700/60 hover:border-gray-600/70 transition-all duration-500 hover-lift animate-fade-in-up overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="mb-8 relative overflow-hidden rounded-xl">
                <div className="w-full h-64 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl mb-6 flex items-center justify-center border border-gray-700/50">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse shadow-2xl shadow-purple-500/25">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-purple-300 font-medium">Mobile Development</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                    Mobile App
                  </span>
                  <span className="text-gray-400 text-sm animate-pulse">2023</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-light text-white group-hover:text-purple-300 transition-colors duration-300">
                  Healthcare App
                  <br />
                  <span className="font-medium text-purple-400">Development</span>
                </h3>

                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Developed a comprehensive mobile application for a healthcare provider that improved
                  patient engagement by 200% and streamlined appointment scheduling and medical records access.
                </p>

                <div className="flex items-center justify-between pt-4">
                  <div className="text-sm text-gray-400">
                    <span className="font-medium text-green-400">Results:</span> 200% engagement increase, 50% admin time reduction
                  </div>
                  <button className="group text-gray-300 font-medium hover:text-purple-300 transition-colors duration-300">
                    <span className="flex items-center">
                      Read More
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:bg-gray-700/60 hover:border-gray-600/70 transition-all duration-500 hover-lift animate-fade-in-up overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="mb-8 relative overflow-hidden rounded-xl">
                <div className="w-full h-64 bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-xl mb-6 flex items-center justify-center border border-gray-700/50">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center animate-bounce shadow-2xl shadow-orange-500/25">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <p className="text-orange-300 font-medium">Data Analytics</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                    Data Analytics
                  </span>
                  <span className="text-gray-400 text-sm animate-pulse">2023</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-light text-white group-hover:text-orange-300 transition-colors duration-300">
                  Manufacturing
                  <br />
                  <span className="font-medium text-orange-400">Analytics Platform</span>
                </h3>

                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Implemented a comprehensive data analytics platform for a manufacturing company that
                  optimized production processes and reduced waste by 30% through predictive maintenance.
                </p>

                <div className="flex items-center justify-between pt-4">
                  <div className="text-sm text-gray-400">
                    <span className="font-medium text-green-400">Results:</span> 30% waste reduction, 25% efficiency improvement
                  </div>
                  <button className="group text-gray-300 font-medium hover:text-orange-300 transition-colors duration-300">
                    <span className="flex items-center">
                      Read More
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our track record speaks for itself. Here are some key metrics from our successful projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-white mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-white mb-2">150%</div>
              <div className="text-gray-300">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-white mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-white mb-2">40%</div>
              <div className="text-gray-300">Average Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Join our list of successful clients and let us help you achieve your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/27794484159?text=Hello, I'm interested in your services." target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors">
              Start Your Project
            </a>
            <button className="border border-gray-300 text-gray-900 px-8 py-4 text-lg font-medium hover:bg-gray-50 transition-colors">
              View All Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;