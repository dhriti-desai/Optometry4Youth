import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Mission from './pages/Mission'
import Team from './pages/Team'
import Events from './pages/Events'
import Newsletter from './pages/Newsletter'
import ArticleView from './pages/ArticleView'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen text-gray-900">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/team" element={<Team />} />
            <Route path="/events" element={<Events />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/newsletter/:id" element={<ArticleView />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}