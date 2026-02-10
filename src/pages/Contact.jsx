import React from 'react'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-dark-charcoal mb-8 animate-fade-in">Contact Us</h1>
        
        <div className="bg-white rounded-3xl shadow-xl p-12 mb-8 hover:shadow-2xl transition-all animate-fade-in">
          <h2 className="text-2xl font-semibold text-teal mb-8">Get in Touch!</h2>
          <p className="text-lg text-dark-charcoal/80 mb-8">
            Have questions? Want to get involved? We'd love to hear from you! Reach out through any of these channels:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-6 hover:scale-105 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-warm-white text-3xl">✉</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-dark-charcoal">Email Us</h3>
              <p className="text-dark-charcoal/80 text-lg font-medium">
                optometry4youth@gmail.com
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 hover:scale-105 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-deep-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-warm-white text-3xl">☎</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-dark-charcoal">Follow Us</h3>
              <a 
                href="https://www.instagram.com/optometry4youth/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-teal hover:text-deep-teal hover:scale-110 transition-all text-lg font-medium inline-block"
              >
                @optometry4youth
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all animate-fade-in">
          <h3 className="text-xl font-semibold text-dark-charcoal mb-4">Quick Links</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://linktr.ee/optometry4youth" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-teal text-warm-white px-6 py-3 rounded-full hover:bg-deep-teal hover:scale-105 transition-all font-semibold shadow-lg"
            >
              Visit Our Linktree
            </a>
            <a 
              href="https://www.instagram.com/optometry4youth/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border-2 border-teal text-teal px-6 py-3 rounded-full hover:bg-light-teal hover:border-deep-teal hover:scale-105 transition-all font-semibold"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}