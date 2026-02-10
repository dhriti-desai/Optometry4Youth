import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section id="home" className="pt-24 px-4 pb-16 flex items-center min-h-screen">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl px-6">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-charcoal leading-tight">
            See the World Clearly
          </h1>
          <p className="mt-6 text-lg text-dark-charcoal/80 max-w-xl">
            Learn about eye health, vision care, and how to keep your eyes healthy for life. Fun, interactive, and made just for you!
          </p>
          <div className="mt-8 flex gap-4">
            <Link to="/events" className="inline-block bg-teal text-warm-white px-6 py-3 rounded-full shadow-lg hover:bg-deep-teal hover:scale-105 hover:shadow-xl transition-all font-semibold">Explore Events</Link>
            <Link to="/about" className="inline-block bg-warm-white border-2 border-teal text-teal px-6 py-3 rounded-full hover:bg-light-teal hover:border-deep-teal hover:scale-105 transition-all font-semibold shadow-md">Learn More</Link>
          </div>
        </div>
        <div className="flex justify-center animate-fade-in">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-105 hover:shadow-3xl transition-all">
            <div className="h-96 overflow-hidden">
              <img 
                src="/images/622995296_26230162106576597_4427844982711019228_n.png" 
                alt="Eye Health" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 bg-gradient-to-br from-light-teal/30 to-teal/20">
              <div className="text-sm text-teal font-semibold">Programs · Workshops · Resources</div>
              <div className="mt-3 font-bold text-dark-charcoal">Discover fun ways to learn about vision and eye care!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}