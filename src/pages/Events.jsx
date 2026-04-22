import React from 'react'

const events = [
  {
    title: "Waterloo Optometry Info Panel",
    date: "Past Event",
    description: "Join us for a Q&A with current Waterloo Optometry students sharing their journeys, challenges, and advice for future applicants. Gain real insight into the path towards becoming an optometrist. We had panelists Sabrina, Japleen, Melanie, and Sophia, who are all currently students at Waterloo.",
    recording: "https://drive.google.com/drive/folders/13xxdYmAAjYDPFWy2CcPtrzF4PH1PZKZR?usp=sharing"
  }
]

export default function Events() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-dark-charcoal mb-6">Events</h1>
          <div className="w-24 h-1 bg-teal mx-auto"></div>
        </div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-all animate-fade-in"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-3xl font-bold text-dark-charcoal">{event.title}</h3>
                <span className="text-sm font-semibold text-teal bg-light-teal/30 px-4 py-2 rounded-full">{event.date}</span>
              </div>
              <p className="text-dark-charcoal/70 text-lg leading-relaxed mb-8">{event.description}</p>
              <a
                href={event.recording}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal text-warm-white px-8 py-4 rounded-full hover:bg-deep-teal hover:scale-105 transition-all font-semibold shadow-lg"
              >
                Watch Recording
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}