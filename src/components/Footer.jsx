import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-light-teal/80 backdrop-blur-sm text-dark-charcoal py-8 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 max-w-7xl">
        <div className="text-dark-charcoal">© {new Date().getFullYear()} Optometry4Youth. All rights reserved.</div>
        <div className="flex gap-6 mt-4 md:mt-0 px-2">
          <a href="https://linktr.ee/optometry4youth" target="_blank" rel="noopener noreferrer" className="hover:text-deep-teal hover:scale-110 transition-all">Linktree</a>
          <a href="https://www.instagram.com/optometry4youth/" target="_blank" rel="noopener noreferrer" className="hover:text-deep-teal hover:scale-110 transition-all">Instagram</a>
        </div>
      </div>
    </footer>
  )
}