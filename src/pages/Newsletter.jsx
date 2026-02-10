import React from 'react'
import { Link } from 'react-router-dom'

const articles = [
  {
    id: "coming-soon",
    title: "Coming Soon",
    date: "TBA",
    preview: "We're building an exciting newsletter featuring monthly articles on the latest research in the ocular field. Stay tuned!",
    image: null
  }
]

export default function Newsletter() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-dark-charcoal mb-4 text-center animate-fade-in">Newsletter</h1>
        <p className="text-center text-dark-charcoal/70 mb-12 text-lg">Monthly articles on ocular research and eye health</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Link
              key={index}
              to={`/newsletter/${article.id}`}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all animate-fade-in cursor-pointer"
            >
              {article.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="text-sm text-teal font-semibold mb-2">{article.date}</div>
                <h3 className="text-xl font-bold text-dark-charcoal mb-3">{article.title}</h3>
                <p className="text-dark-charcoal/70 leading-relaxed">{article.preview}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-teal mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-dark-charcoal/70 mb-6">
              Be the first to know when we publish new articles about ocular research and eye health!
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-full border-2 border-light-teal focus:border-teal focus:outline-none transition-all"
              />
              <button className="bg-teal text-warm-white px-6 py-3 rounded-full hover:bg-deep-teal hover:scale-105 transition-all font-semibold shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}