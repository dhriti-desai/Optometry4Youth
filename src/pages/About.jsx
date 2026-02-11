import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
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

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Our Story */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-br from-teal to-deep-teal rounded-2xl mb-6"></div>
            <h2 className="text-3xl font-bold text-dark-charcoal mb-4">Our Story</h2>
            <p className="text-dark-charcoal/80 text-lg leading-relaxed">
              We are a student-led branch of Medicine4Youth based in North America. We are dedicated to empowering youth interested in optometry and vision science by providing accessible education and experiences that spark curiosity and support career exploration.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-br from-light-teal to-teal rounded-2xl mb-6"></div>
            <h2 className="text-3xl font-bold text-dark-charcoal mb-4">Our Vision</h2>
            <p className="text-dark-charcoal/80 text-lg leading-relaxed">
              We envision a future where every student with an interest in optometry can confidently pursue their passion, regardless of background or access to resources. Through community, education, and mentorship, we strive to make the path to optometry school more visible, equitable, and empowering for youth throughout all stages of their journey.
            </p>
          </div>

          {/* Our Impact */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-br from-deep-teal to-light-teal rounded-2xl mb-6"></div>
            <h2 className="text-3xl font-bold text-dark-charcoal mb-4">Our Impact</h2>
            <p className="text-dark-charcoal/80 text-lg leading-relaxed">
              We've reached hundreds of students through interactive workshops, fun educational content, and community outreach events focused on vision health and the path to optometry.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}