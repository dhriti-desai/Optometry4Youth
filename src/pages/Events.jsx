import React from 'react'

const events = [
  {
    title: "Eye Health Workshop Series",
    date: "Coming Soon!",
    time: "Interactive Workshops",
    location: "",
    description: "Join us for fun, interactive workshops where you'll learn all about how your eyes work, how to keep them healthy, and why vision care matters. Perfect for middle and high school students who want to learn in a fun, engaging way!"
  }
]

export default function Events() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-dark-charcoal mb-8 text-center animate-fade-in">Our Events</h1>
        
        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl hover:scale-105 transition-all animate-fade-in"
              >
                <h3 className="text-2xl font-bold text-teal mb-4 text-center">{event.title}</h3>
                <div className="text-center text-deep-teal mb-4">
                  <p className="text-lg font-semibold">{event.date}</p>
                </div>
                <p className="text-dark-charcoal/80 text-lg leading-relaxed mb-6">{event.description}</p>
                <div className="text-center">
                  <a href="https://www.instagram.com/optometry4youth/" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal text-warm-white px-6 py-3 rounded-full hover:bg-deep-teal hover:scale-105 transition-all font-semibold shadow-lg">
                    Follow for Updates →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}