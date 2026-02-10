import React from 'react'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-dark-charcoal mb-8 animate-fade-in">About Optometry4Youth</h1>
        
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 hover:shadow-2xl hover:scale-105 transition-all animate-fade-in">
          <h2 className="text-2xl font-semibold text-teal mb-4">Our Story</h2>
          <p className="text-dark-charcoal/80 text-lg leading-relaxed">
            Optometry4Youth is a student-led organization dedicated to making eye health education fun, accessible, and engaging for middle and high school students. We believe every young person deserves to understand how their vision works and how to keep their eyes healthy!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all animate-fade-in">
            <h3 className="text-xl font-semibold text-deep-teal mb-3">Our Vision</h3>
            <p className="text-dark-charcoal/80 leading-relaxed">
              To create a world where every young person has access to quality eye health education and resources, empowering them to take care of their vision for life.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all animate-fade-in">
            <h3 className="text-xl font-semibold text-deep-teal mb-3">Our Impact</h3>
            <p className="text-dark-charcoal/80 leading-relaxed">
              We've reached hundreds of students through interactive workshops, fun educational content, and community outreach programs focused on vision health and eye care awareness.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}