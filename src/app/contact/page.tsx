import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email, company, message } = formData;
    const whatsappMessage = `Hello, I'm interested in your services.\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/27794484159?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-16 overflow-hidden">
        {/* Enhanced Animated Background with Geometric Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
          {/* Subtle Geometric Pattern */}
          <div className="absolute inset-0 opacity-5"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
               }}>
          </div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-indigo-100 rounded-full opacity-20 animate-bounce"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <span className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium tracking-wider uppercase border border-white/20 shadow-sm">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
                Get In Touch
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight animate-fade-in-up">
              Let&apos;s start
              <br />
              <span className="font-medium relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                building
                <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-scale-in shadow-lg"></div>
              </span>
              <br />
              something
              <br />
              <span className="font-medium text-green-400">amazing</span>.
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in-up">
              Ready to transform your business with cutting-edge technology solutions?
              Get in touch with our team to discuss your project requirements and discover how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Enhanced Dark Coding Background with Layered Depth */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
          {/* Subtle alternating pattern */}
          <div className="absolute inset-0 opacity-20"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Crect x='10' y='10' width='80' height='80' rx='8'/%3E%3C/g%3E%3C/svg%3E")`
               }}>
          </div>

          {/* Scattered Coding Text Elements */}
          <div className="absolute top-10 left-20 text-green-400/10 text-sm animate-float">{"const"} contact = {"{"};</div>
          <div className="absolute top-32 right-32 text-blue-400/10 text-sm animate-pulse">{"function"} sendMessage() {"{"};</div>
          <div className="absolute bottom-32 left-16 text-purple-400/10 text-sm animate-bounce">return response;</div>
          <div className="absolute bottom-16 right-20 text-cyan-400/10 text-sm animate-float">{"}"}</div>
          <div className="absolute top-1/2 left-10 text-yellow-400/10 text-sm animate-pulse">email.validate()</div>
          <div className="absolute top-1/3 right-10 text-pink-400/10 text-sm animate-float">{"await"} form.submit()</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-gray-700/50 hover:bg-gray-700/60 hover:border-gray-600/70 transition-all duration-500 hover-lift animate-slide-in-left overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-light text-white mb-6 animate-fade-in-up">
                  Send us a
                  <br />
                  <span className="font-medium text-blue-400">message</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="animate-fade-in-up">
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-500"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-500"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-500"
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-500"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 text-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover-lift animate-fade-in-up rounded-xl shadow-lg shadow-blue-500/25 group"
                    style={{animationDelay: '0.5s'}}
                  >
                    <span className="flex items-center justify-center">
                      Send Message
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-right">
              <div>
                <h3 className="text-xl md:text-2xl font-light text-white mb-6 animate-fade-in-up">
                  Get in
                  <br />
                  <span className="font-medium text-blue-400">touch</span>
                </h3>

                <div className="space-y-6">
                  <div className="group flex items-start space-x-4 p-3 rounded-xl bg-gray-800/30 hover:bg-gray-700/50 transition-all duration-300 animate-fade-in-up border border-gray-700/30">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse shadow-lg shadow-blue-500/25">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">Email</h4>
                      <p className="text-gray-300">info@novatekconsulting.com</p>
                    </div>
                  </div>

                  <div className="group flex items-start space-x-4 p-3 rounded-xl bg-gray-800/30 hover:bg-gray-700/50 transition-all duration-300 animate-fade-in-up border border-gray-700/30" style={{animationDelay: '0.2s'}}>
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 animate-bounce shadow-lg shadow-green-500/25">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1 group-hover:text-green-300 transition-colors duration-300">Phone</h4>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="group flex items-start space-x-4 p-3 rounded-xl bg-gray-800/30 hover:bg-gray-700/50 transition-all duration-300 animate-fade-in-up border border-gray-700/30" style={{animationDelay: '0.4s'}}>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 animate-float shadow-lg shadow-purple-500/25">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1 group-hover:text-purple-300 transition-colors duration-300">Address</h4>
                      <p className="text-gray-300">
                        123 Tech Street<br />
                        Innovation City, IC 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <h3 className="text-xl md:text-2xl font-light text-white mb-6">
                  Office
                  <br />
                  <span className="font-medium text-green-400">hours</span>
                </h3>

                <div className="space-y-2 bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50">
                  <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-white font-medium bg-green-500/20 text-green-400 px-3 py-1 rounded">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-white font-medium bg-blue-500/20 text-blue-400 px-3 py-1 rounded">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-white font-medium bg-red-500/20 text-red-400 px-3 py-1 rounded">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative bg-gray-800 h-64 overflow-hidden">
        {/* Coding Background for Map */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800"></div>

          {/* Coding Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0"
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ff00' fill-opacity='0.1'%3E%3Cpath d='M20 20m-15 0a15 15 0 1 1 30 0a15 15 0 1 1 -30 0'/%3E%3C/g%3E%3C/svg%3E")`
                 }}>
            </div>
          </div>

          {/* Floating Location Pins */}
          <div className="absolute top-20 left-1/4 text-green-400/20 text-sm animate-float">📍 Location A</div>
          <div className="absolute top-40 right-1/3 text-blue-400/20 text-sm animate-pulse">📍 Location B</div>
          <div className="absolute bottom-32 left-1/2 text-purple-400/20 text-sm animate-bounce">📍 Location C</div>
        </div>

        <div className="relative w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce shadow-2xl shadow-green-500/25">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-gray-300 text-lg font-medium">Interactive map with office locations</p>
            <p className="text-gray-400 text-sm mt-2">Click to explore our global presence</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative bg-gray-900 py-16 overflow-hidden">
        {/* Coding Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-transparent to-gray-800"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M10 10h40v40H10z'/%3E%3C/g%3E%3C/svg%3E")`
               }}>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 animate-fade-in-up">
              Frequently Asked
              <br />
              <span className="font-medium text-green-400">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300 animate-fade-in-up">
              <h3 className="text-xl font-medium text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
                How long does a typical project take?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Project timelines vary depending on scope and complexity. Most projects range from 3-6 months,
                but we work closely with clients to establish realistic timelines that meet their business needs.
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h3 className="text-xl font-medium text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></span>
                What industries do you specialize in?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We work with clients across various industries including healthcare, finance, retail,
                manufacturing, and technology. Our solutions are tailored to each industry&apos;s specific needs and challenges.
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <h3 className="text-xl font-medium text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                Do you provide ongoing support after project completion?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Yes, we offer comprehensive maintenance and support packages to ensure your technology
                investments continue to deliver value long after the initial project is completed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;