import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

export default function Navbar(){
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path
  
  return (
    <nav className="bg-light-teal/80 backdrop-blur-sm text-dark-charcoal fixed w-full top-0 z-40 shadow-xl">
      <div className="container mx-auto flex items-center justify-between h-16 px-6 max-w-7xl">
        <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform">
          <Logo size={40} />
          <div className="font-bold text-lg">Optometry4Youth</div>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className={`hover:text-deep-teal hover:scale-105 transition-all ${isActive('/') ? 'text-deep-teal font-semibold' : ''}`}>Home</Link>
          <Link to="/about" className={`hover:text-deep-teal hover:scale-105 transition-all ${isActive('/about') ? 'text-deep-teal font-semibold' : ''}`}>About</Link>
          <Link to="/team" className={`hover:text-deep-teal hover:scale-105 transition-all ${isActive('/team') ? 'text-deep-teal font-semibold' : ''}`}>Team</Link>
          <Link to="/events" className={`hover:text-deep-teal hover:scale-105 transition-all ${isActive('/events') ? 'text-deep-teal font-semibold' : ''}`}>Events</Link>
          <Link to="/newsletter" className={`hover:text-deep-teal hover:scale-105 transition-all ${isActive('/newsletter') ? 'text-deep-teal font-semibold' : ''}`}>Newsletter</Link>
          <Link to="/contact" className={`font-medium px-5 py-2 rounded-full transition-all ${isActive('/contact') ? 'bg-deep-teal text-warm-white' : 'bg-teal text-warm-white hover:bg-deep-teal hover:scale-105 hover:shadow-lg'}`}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}