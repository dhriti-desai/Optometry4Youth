import React from 'react'

const teamMembers = [
  {
    name: "Team Member 1",
    role: "President",
    affiliation: "Optometry4Youth",
    bio: "Passionate about making eye health education fun and accessible for all students!",
    image: null
  },
  {
    name: "Team Member 2",
    role: "Vice President",
    affiliation: "Optometry4Youth",
    bio: "Dedicated to helping youth understand the importance of vision care and eye health.",
    image: null
  },
  {
    name: "Team Member 3",
    role: "Outreach Coordinator",
    affiliation: "Optometry4Youth",
    bio: "Excited to connect with students and spread awareness about eye health!",
    image: null
  },
  {
    name: "Team Member 4",
    role: "Content Creator",
    affiliation: "Optometry4Youth",
    bio: "Creating engaging content to make learning about vision care fun and interactive!",
    image: null
  }
]

export default function Team() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-dark-charcoal mb-6">
            Meet the Team
          </h1>
          <div className="w-24 h-1 bg-teal mx-auto mb-6"></div>
          <p className="text-xl text-dark-charcoal/70 max-w-2xl mx-auto">
            The passionate students behind Optometry4Youth
          </p>
        </div>
        
        {/* Team Grid - Larger Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all animate-fade-in"
            >
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-light-teal to-deep-teal rounded-2xl overflow-hidden flex items-center justify-center flex-shrink-0">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg className="w-14 h-14 text-warm-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-dark-charcoal mb-2">{member.name}</h3>
                    <p className="text-lg text-teal font-semibold mb-1">{member.role}</p>
                    <p className="text-sm text-dark-charcoal/60 mb-4">{member.affiliation}</p>
                    <p className="text-dark-charcoal/70 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="animate-fade-in">
          <div className="bg-gradient-to-br from-light-teal/40 to-teal/20 rounded-3xl p-12 text-center shadow-xl">
            <h2 className="text-3xl font-bold text-dark-charcoal mb-6">Student-Led, Student-Focused</h2>
            <p className="text-dark-charcoal/80 text-lg leading-relaxed max-w-3xl mx-auto">
              Optometry4Youth is a student-led organization by students, for students. Our mission is to 
              create accessible opportunities and fun learning experiences for young people passionate about 
              eye health and vision care. Together, we're making a difference in how students learn about 
              and care for their vision.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}