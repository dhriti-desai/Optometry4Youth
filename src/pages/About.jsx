import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-dark-charcoal mb-6">
            Who We Are
          </h1>
          <div className="w-24 h-1 bg-teal mx-auto mb-6"></div>
          <p className="text-xl text-dark-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            A student-led movement making eye health education accessible, engaging, and fun for young people everywhere.
          </p>
        </div>

        {/* Story Section - Alternating Layout */}
        <div className="space-y-20">
          {/* Our Story */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-teal to-deep-teal rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl text-warm-white">📖</span>
                </div>
                <h2 className="text-3xl font-bold text-dark-charcoal mb-4">Our Story</h2>
                <p className="text-dark-charcoal/80 text-lg leading-relaxed">
                  Optometry4Youth was born from a simple idea: eye health education doesn't have to be boring. 
                  We're a group of passionate students who believe every young person deserves to understand how 
                  their vision works and how to keep their eyes healthy for life.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-fade-in">
              <div className="bg-gradient-to-br from-light-teal/40 to-teal/20 rounded-3xl p-12 text-center">
                <div className="text-6xl mb-4">👁️</div>
                <h3 className="text-2xl font-bold text-deep-teal">Vision for Change</h3>
              </div>
            </div>
          </div>

          {/* Our Vision */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="bg-gradient-to-br from-teal/30 to-deep-teal/20 rounded-3xl p-12 text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-deep-teal">Clear Goals</h3>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-light-teal to-teal rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl text-warm-white">✨</span>
                </div>
                <h2 className="text-3xl font-bold text-dark-charcoal mb-4">Our Vision</h2>
                <p className="text-dark-charcoal/80 text-lg leading-relaxed">
                  To create a world where every young person has access to quality eye health education and 
                  resources, empowering them to take care of their vision for life. We're building a community 
                  that makes learning about eyes exciting and accessible.
                </p>
              </div>
            </div>
          </div>

          {/* Our Impact */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-deep-teal to-teal rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl text-warm-white">🌟</span>
                </div>
                <h2 className="text-3xl font-bold text-dark-charcoal mb-4">Our Impact</h2>
                <p className="text-dark-charcoal/80 text-lg leading-relaxed">
                  We've reached hundreds of students through interactive workshops, fun educational content, 
                  and community outreach programs focused on vision health and eye care awareness. Every day, 
                  we're helping young people see their future more clearly.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-fade-in">
              <div className="bg-gradient-to-br from-light-teal/30 to-warm-white rounded-3xl p-12 text-center">
                <div className="text-6xl mb-4">💫</div>
                <h3 className="text-2xl font-bold text-deep-teal">Making Waves</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}