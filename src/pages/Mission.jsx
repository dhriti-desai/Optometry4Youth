import React from 'react'

export default function Mission() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Hero */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-dark-charcoal mb-6">
            Our Mission
          </h1>
          <div className="w-24 h-1 bg-teal mx-auto mb-8"></div>
        </div>

        {/* Mission Statement */}
        <div className="mb-16 animate-fade-in">
          <div className="bg-gradient-to-br from-teal to-deep-teal rounded-3xl p-12 text-center shadow-2xl">
            <p className="text-2xl md:text-3xl font-semibold text-warm-white leading-relaxed">
              To inspire and educate middle and high school students about eye health and vision care 
              through fun, interactive programs and engaging digital content.
            </p>
          </div>
        </div>

        {/* What We Do - Vertical Cards */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-dark-charcoal text-center mb-12">What We Do</h2>
          
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all animate-fade-in">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-light-teal to-teal rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">🎓</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-dark-charcoal mb-3">Educational Workshops</h3>
                <p className="text-dark-charcoal/70 text-lg leading-relaxed">
                  Interactive sessions that make learning about eye health fun and memorable. We break down 
                  complex topics into engaging, easy-to-understand content designed specifically for students.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all animate-fade-in">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-teal to-deep-teal rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">📱</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-dark-charcoal mb-3">Digital Content</h3>
                <p className="text-dark-charcoal/70 text-lg leading-relaxed">
                  From social media posts to our newsletter, we create content that's informative, 
                  visually appealing, and shareable. Making eye health education accessible wherever you are.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all animate-fade-in">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-deep-teal to-light-teal rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">🤝</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-dark-charcoal mb-3">Community Outreach</h3>
                <p className="text-dark-charcoal/70 text-lg leading-relaxed">
                  Partnering with schools and organizations to spread awareness about vision health. 
                  We believe in building a community that values and prioritizes eye care.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all animate-fade-in">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-light-teal to-deep-teal rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">📚</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-dark-charcoal mb-3">Resource Hub</h3>
                <p className="text-dark-charcoal/70 text-lg leading-relaxed">
                  Curating the best resources, research, and tips about eye health in one accessible place. 
                  Your go-to source for everything vision-related.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}