import React from 'react'

export default function Mission() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-dark-charcoal mb-6">
            Our Mission
          </h1>
          <div className="w-24 h-1 bg-teal mx-auto"></div>
        </div>

        {/* Mission Statement - Large Centered Card */}
        <div className="animate-fade-in">
          <div className="bg-gradient-to-br from-teal via-deep-teal to-teal rounded-3xl p-16 text-center shadow-2xl hover:shadow-3xl transition-all">
            <p className="text-2xl md:text-4xl font-semibold text-warm-white leading-relaxed">
              Our mission is to equip and inspire the next generation of optometry professionals by providing accessible resources, personalized support, and meaningful opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}