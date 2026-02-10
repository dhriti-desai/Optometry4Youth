import React from 'react'

export default function Logo({ size = 40, className = "" }) {
  return (
    <div 
      className={`rounded-full bg-white flex items-center justify-center overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <img 
        src="/images/622814861_4648807422013463_1681302555113766108_n.png" 
        alt="Optometry4Youth Logo" 
        className="object-cover"
        style={{ width: size * 1.2, height: size * 1.2, transform: 'translate(0.05px, 0px)' }}
      />
    </div>
  )
}