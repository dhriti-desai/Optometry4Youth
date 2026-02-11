import React from 'react'

export default function Contact() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-dark-charcoal mb-6">
            Get in Touch
          </h1>
          <div className="w-24 h-1 bg-teal mx-auto mb-6"></div>
          <p className="text-xl text-dark-charcoal/70 max-w-2xl mx-auto">
            Have questions? Want to collaborate? We'd love to hear from you!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Email Card */}
          <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-br from-teal to-deep-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-warm-white text-4xl">✉</span>
            </div>
            <h3 className="text-2xl font-bold text-dark-charcoal mb-3 text-center">Email Us</h3>
            <p className="text-dark-charcoal/70 mb-4 text-center">
              Drop us a line anytime
            </p>
            <a 
              href="mailto:optometry4youth@gmail.com"
              className="block text-center text-teal hover:text-deep-teal text-lg font-semibold"
            >
              optometry4youth@gmail.com
            </a>
          </div>

          {/* Social Card */}
          <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-br from-light-teal to-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-warm-white text-4xl">☎</span>
            </div>
            <h3 className="text-2xl font-bold text-dark-charcoal mb-3 text-center">Follow Us</h3>
            <p className="text-dark-charcoal/70 mb-4 text-center">
              Stay updated on social media
            </p>
            <a 
              href="https://www.instagram.com/optometry4youth/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block text-center text-teal hover:text-deep-teal text-lg font-semibold"
            >
              @optometry4youth
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-br from-light-teal/30 to-teal/10 rounded-3xl p-10 shadow-xl text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-dark-charcoal mb-6">Connect With Us</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://linktr.ee/optometry4youth" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-teal text-warm-white px-8 py-4 rounded-full hover:bg-deep-teal hover:scale-105 transition-all font-semibold shadow-lg text-lg"
            >
              Visit Our Linktree
            </a>
            <a 
              href="https://www.instagram.com/optometry4youth/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border-2 border-teal text-teal bg-white px-8 py-4 rounded-full hover:bg-light-teal hover:border-deep-teal hover:scale-105 transition-all font-semibold text-lg"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}