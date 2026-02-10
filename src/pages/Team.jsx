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
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-dark-charcoal mb-8 text-center animate-fade-in">Our Team</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-all animate-fade-in"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-light-teal to-teal rounded-full mx-auto mb-4 overflow-hidden flex items-center justify-center">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg className="w-12 h-12 text-warm-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                )}
              </div>
              <h3 className="text-lg font-bold text-dark-charcoal mb-1">{member.name}</h3>
              <p className="text-sm text-teal font-semibold mb-1">{member.role}</p>
              <p className="text-xs text-dark-charcoal/60 mb-3">{member.affiliation}</p>
              <p className="text-dark-charcoal/70 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 animate-fade-in">
          <h2 className="text-2xl font-bold text-dark-charcoal mb-6 text-center">About Us</h2>
          <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all">
            <p className="text-dark-charcoal/80 text-center text-lg leading-relaxed">
              Optometry4Youth is a student-led organization by students, for students. Our mission is to 
              create accessible opportunities and fun learning experiences for young people passionate about 
              eye health and vision care.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}