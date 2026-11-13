import { useCallback, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Metrics from './components/Metrics'
import TeamTestimonials from './components/TeamTestimonials'
import FooterCTA from './components/FooterCTA'
import ContactModal from './components/ContactModal'
import ClientPortal from './components/ClientPortal'
import ScrollEffects from './components/ScrollEffects'
import './App.css'

function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [portalOpen, setPortalOpen] = useState(false)

  const handleOpenContact = useCallback(() => setContactModalOpen(true), [])
  const handleCloseContact = useCallback(() => setContactModalOpen(false), [])
  const handleOpenPortal = useCallback(() => setPortalOpen(true), [])
  const handleClosePortal = useCallback(() => setPortalOpen(false), [])
  const handleRequestPortalAccess = useCallback(() => {
    setPortalOpen(false)
    setContactModalOpen(true)
  }, [])

  return (
    <div className="agency-app">
      <ScrollEffects />
      {/* Top Navigation */}
      <Navbar onOpenContact={handleOpenContact} onOpenPortal={handleOpenPortal} />

      {/* Main Page Sections */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero onOpenContact={handleOpenContact} />

        {/* 2. Services Section */}
        <Services onOpenContact={handleOpenContact} />

        {/* 3. Portfolio Section with Working State Filter */}
        <Portfolio onOpenContact={handleOpenContact} />

        {/* 4. Impact Metrics Section */}
        <Metrics />

        {/* 5. Team & Testimonials Section */}
        <TeamTestimonials onOpenContact={handleOpenContact} />
      </main>

      {/* 6. Footer CTA & Brand Footer */}
      <FooterCTA onOpenContact={handleOpenContact} />

      {/* Interactive Contact & Inquiry Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={handleCloseContact}
      />
      <ClientPortal
        isOpen={portalOpen}
        onClose={handleClosePortal}
        onRequestAccess={handleRequestPortalAccess}
      />
    </div>
  )
}

export default App
