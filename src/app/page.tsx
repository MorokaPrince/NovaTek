import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section - Match Services Page Style */}
      <section className="relative bg-gray-900 py-12 lg:py-20 overflow-hidden">
        {/* Dark Coding Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

          {/* Scattered Coding Elements */}
          <div className="absolute top-10 left-20 text-green-400/10 text-sm animate-float">{"const"} solution = {"{"};</div>
          <div className="absolute top-32 right-32 text-blue-400/10 text-sm animate-pulse">{"function"} deploy() {"{"};</div>
          <div className="absolute bottom-32 left-16 text-purple-400/10 text-sm animate-bounce">return success;</div>
          <div className="absolute bottom-16 right-20 text-cyan-400/10 text-sm animate-float">{"}"}</div>
          <div className="absolute top-1/2 left-10 text-yellow-400/10 text-sm animate-pulse">{"await"} database.connect()</div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Professional Tagline */}
            <div className="mb-6 animate-fade-in animate-delay-200">
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-full text-gray-300 text-sm font-medium tracking-wider uppercase border border-gray-600/50 shadow-lg">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse-glow"></span>
                Technology Consulting Agency
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight animate-fade-in-up">
              <span className="inline-block animate-fade-in-up animate-delay-300">We craft digital</span>
              <br />
              <span className="font-medium relative animate-fade-in-up animate-delay-500">
                solutions
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-scale-in animate-delay-700"></div>
              </span>
              <br />
              <span className="inline-block animate-fade-in-up animate-delay-400">that drive business</span>
              <br />
              <span className="font-medium animate-fade-in-up animate-delay-600">growth</span>.
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in-up animate-delay-700">
              Transform your business with <span className="font-medium text-white">cutting-edge technology solutions</span> and strategic consulting services
              that deliver <span className="font-medium text-green-400">measurable results</span> and sustainable competitive advantages.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-800">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-lift rounded-xl shadow-2xl">
                <span className="flex items-center">
                  Start Your Project
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button className="group border-2 border-gray-600 text-gray-300 px-8 py-4 text-lg font-medium hover:bg-gray-800 hover:text-white transition-all duration-300 hover-lift rounded-xl">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Our Work
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20 relative overflow-hidden">
        {/* Coding Background Visual */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M10 10h60v60H10z'/%3E%3Cpath d='M15 15h50v50H15z' fill='%23fff' fill-opacity='0.03'/%3E%3C/g%3E%3C/svg%3E")`
               }}>
          </div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-20 text-2xl animate-float opacity-10">{"{ }"}</div>
          <div className="absolute top-32 right-32 text-3xl animate-bounce opacity-10">{"</>"}</div>
          <div className="absolute bottom-32 left-16 text-2xl animate-pulse opacity-10">console.log()</div>
          <div className="absolute bottom-16 right-20 text-2xl animate-float opacity-10">function()</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="animate-fade-in animate-delay-200">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full text-gray-700 text-sm font-medium tracking-wider uppercase border border-gray-300/30">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse-glow"></span>
                What We Do
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 animate-fade-in-up animate-delay-400">
              Our <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">Services</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animate-delay-600 leading-relaxed">
              Comprehensive technology consulting services designed to <span className="font-medium text-gray-800">accelerate your digital transformation journey</span> and drive sustainable business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Technology Consulting */}
            <div className="group relative text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 hover-lift animate-slide-in-left">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                  <svg className="w-10 h-10 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Technology Consulting</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Strategic technology guidance to help you make informed decisions and stay ahead of the competition with future-ready solutions.
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-blue-600 font-semibold">
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Digital Transformation */}
            <div className="group relative text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 hover-lift animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 shadow-lg">
                  <svg className="w-10 h-10 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">Digital Transformation</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Transform your business processes with cutting-edge digital solutions tailored to your unique needs and market challenges.
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-purple-600 font-semibold">
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="group relative text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 hover-lift animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                  <svg className="w-10 h-10 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">Project Management</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Expert project management services to ensure successful delivery of your technology initiatives on time and within budget.
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-green-600 font-semibold">
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-10 animate-float"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-10 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                About NovaTek
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With over a decade of experience in technology consulting, we help businesses navigate the complex digital landscape and achieve their strategic objectives through innovative solutions.
              </p>
              <div className="space-y-6">
                <div className="flex items-center animate-fade-in-up">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4 animate-pulse"></div>
                  <span className="text-gray-700">Proven track record of successful projects</span>
                </div>
                <div className="flex items-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4 animate-pulse"></div>
                  <span className="text-gray-700">Expert team of technology consultants</span>
                </div>
                <div className="flex items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-4 animate-pulse"></div>
                  <span className="text-gray-700">Customized solutions for your business</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover-lift animate-slide-in-right">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Us?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team combines deep technical knowledge with business acumen to deliver solutions that drive real results and long-term value for our clients.
              </p>

              {/* Visual Element - Code Block Representation */}
              <div className="bg-gray-900 rounded-lg p-4 mb-6 font-mono text-sm text-green-400 overflow-hidden">
                <div className="text-gray-500 mb-2 flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-gray-400 ml-2">{/* Your success is our code */}</span>
                </div>
                <div className="animate-pulse text-blue-400">function transformBusiness() {"{"}</div>
                <div className="ml-4 animate-fade-in text-gray-300" style={{animationDelay: '0.5s'}}>return "innovative_solutions";</div>
                <div className="animate-fade-in text-blue-400" style={{animationDelay: '0.7s'}}>{"}"}</div>
              </div>

              <button className="group bg-gray-900 text-white px-6 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 hover-lift">
                <span className="flex items-center">
                  Learn More About Us
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Coding Showcase Section */}
      <section className="bg-white py-20 relative overflow-hidden">
        {/* Real Coding Background */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 via-transparent to-gray-800/5"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Crect x='10' y='10' width='80' height='80' rx='8'/%3E%3Crect x='20' y='20' width='60' height='60' rx='4' fill='%23fff' fill-opacity='0.02'/%3E%3C/g%3E%3C/svg%3E")`
               }}>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 animate-fade-in-up">
              Technology in
              <br />
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">Action</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up leading-relaxed">
              See how cutting-edge technology transforms businesses and drives innovation across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Real Code Editor Visualization */}
            <div className="group relative bg-gray-900 rounded-2xl p-8 text-center hover-lift animate-slide-in-left overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center animate-pulse shadow-2xl">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">Clean Code</h3>
                  <p className="text-gray-300 leading-relaxed">Well-structured, maintainable code that scales with your business</p>
                </div>

                {/* Realistic Code Editor Interface */}
                <div className="bg-black rounded-xl p-4 font-mono text-sm border border-gray-700">
                  <div className="flex items-center mb-3 pb-2 border-b border-gray-700">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="ml-4 text-gray-400 text-xs">main.js</div>
                  </div>
                  <div className="text-green-400 animate-fade-in">{"function solution() {"}</div>
                  <div className="text-blue-400 animate-fade-in ml-4" style={{animationDelay: '0.3s'}}>{/* Transform business logic */}</div>
                  <div className="text-purple-400 animate-fade-in ml-4" style={{animationDelay: '0.6s'}}>return innovation;</div>
                  <div className="text-green-400 animate-fade-in" style={{animationDelay: '0.9s'}}>{"}"}</div>
                </div>
              </div>
            </div>

            {/* Real Data Analytics Visualization */}
            <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 text-center hover-lift animate-fade-in-up overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl mx-auto mb-4 flex items-center justify-center animate-bounce shadow-2xl">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-gray-900 text-xl font-semibold mb-2">Data Analytics</h3>
                  <p className="text-gray-600 leading-relaxed">Transform raw data into actionable insights for smarter decisions</p>
                </div>

                {/* Professional Chart Visualization */}
                <div className="relative h-20 bg-gray-50 rounded-lg p-3">
                  <div className="flex items-end justify-center space-x-3 h-full">
                    <div className="relative">
                      <div className="w-4 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t animate-fade-in-up" style={{height: '60%', animationDelay: '0.2s'}}></div>
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">Q1</div>
                    </div>
                    <div className="relative">
                      <div className="w-4 bg-gradient-to-t from-purple-500 to-purple-300 rounded-t animate-fade-in-up" style={{height: '80%', animationDelay: '0.4s'}}></div>
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">Q2</div>
                    </div>
                    <div className="relative">
                      <div className="w-4 bg-gradient-to-t from-green-500 to-green-300 rounded-t animate-fade-in-up" style={{height: '40%', animationDelay: '0.6s'}}></div>
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">Q3</div>
                    </div>
                    <div className="relative">
                      <div className="w-4 bg-gradient-to-t from-orange-500 to-orange-300 rounded-t animate-fade-in-up" style={{height: '90%', animationDelay: '0.8s'}}></div>
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">Q4</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Real Cloud Infrastructure Visualization */}
            <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 text-center hover-lift animate-slide-in-right overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mx-auto mb-4 flex items-center justify-center animate-float shadow-2xl">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                  </div>
                  <h3 className="text-gray-900 text-xl font-semibold mb-2">Cloud Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">Scalable, secure cloud infrastructure for modern applications</p>
                </div>

                {/* Professional Network Visualization */}
                <div className="relative h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-3 border border-blue-100">
                  <div className="flex items-center justify-center space-x-4 h-full">
                    <div className="relative">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-white text-xs font-bold">DB</span>
                      </div>
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">Database</div>
                    </div>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 animate-pulse"></div>
                    <div className="relative">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center animate-float">
                        <span className="text-white text-xs font-bold">SV</span>
                      </div>
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">Server</div>
                    </div>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-300 to-green-300 animate-pulse"></div>
                    <div className="relative">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                        <span className="text-white text-xs font-bold">CDN</span>
                      </div>
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">CDN</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Contact CTA */}
      <section id="contact" className="relative bg-gray-900 text-white py-20 overflow-hidden">
        {/* Realistic Coding Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

          {/* Terminal Background Effect */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full"
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ff00' fill-opacity='0.1'%3E%3Ctext x='5' y='15' font-family='monospace' font-size='12'>01</text%3E%3Ctext x='5' y='30' font-family='monospace' font-size='12'>10</text%3E%3C/g%3E%3C/svg%3E")`
                 }}>
            </div>
          </div>

          {/* Floating Code Elements */}
          <div className="absolute top-20 right-20 text-green-400 text-sm animate-float opacity-20">{"const"} solution = {"{"};</div>
          <div className="absolute bottom-20 left-20 text-blue-400 text-sm animate-pulse opacity-20">{"function"} deploy() {"{"};</div>
          <div className="absolute top-1/2 right-10 text-purple-400 text-sm animate-bounce opacity-20">return success;</div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light mb-6 animate-fade-in-up">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12 animate-fade-in-up leading-relaxed">
            Let's discuss how we can help you achieve your technology goals and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <button className="group relative bg-white text-gray-900 px-10 py-5 text-lg font-medium hover:bg-gray-100 transition-all duration-500 hover-lift rounded-xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center">
                Get In Touch
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </button>
            <button className="group relative border-2 border-gray-600 text-white px-10 py-5 text-lg font-medium hover:bg-gray-800 hover:border-gray-500 transition-all duration-500 hover-lift rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center">
                <svg className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Case Studies
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;