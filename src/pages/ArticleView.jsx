import React from 'react'
import { useParams, Link } from 'react-router-dom'

const articles = [
  {
    id: "coming-soon",
    title: "Coming Soon",
    date: "TBA",
    preview: "We're building an exciting newsletter featuring monthly articles on the latest research in the ocular field. Stay tuned!",
    content: "We're currently in the early stages of planning our newsletter. Soon, this space will feature in-depth articles about ongoing research in the ocular field, eye health tips, and the latest developments in optometry. Stay tuned for exciting content!",
    image: null
  }
]

export default function ArticleView() {
  const { id } = useParams()
  const article = articles.find(a => a.id === id)

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-dark-charcoal mb-4">Article Not Found</h1>
          <Link to="/newsletter" className="text-teal hover:text-deep-teal">← Back to Newsletter</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link to="/newsletter" className="text-teal hover:text-deep-teal mb-6 inline-block">← Back to Newsletter</Link>
        
        <article className="bg-white rounded-3xl shadow-xl p-8 md:p-12 animate-fade-in">
          {article.image && (
            <div className="h-96 overflow-hidden rounded-2xl mb-8">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="text-sm text-teal font-semibold mb-2">{article.date}</div>
          <h1 className="text-4xl font-bold text-dark-charcoal mb-6">{article.title}</h1>
          
          <div className="prose prose-lg max-w-none text-dark-charcoal/80 leading-relaxed">
            {article.content}
          </div>
        </article>
      </div>
    </div>
  )
}