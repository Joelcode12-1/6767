import { useState } from 'react'
import { LogoMark, ArrowRight } from './Icons'

export default function Navbar({ onOpenContact, onOpenPortal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="site-navbar">
      <div className="navbar-container">
        {/* Brand Identification */}
        <a href="#hero" className="brand-link" onClick={(e) => handleNavClick(e, 'hero')}>
          <LogoMark size={34} />
          <div className="brand-text">
            <span className="brand-title">NEXORA TECH</span>
            <span className="brand-motto">Modern Websites. Real Results.</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <a
            href="#services"
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'services')}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'portfolio')}
          >
            Portfolio
          </a>
          <a
            href="#metrics"
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'metrics')}
          >
            Impact
          </a>
          <a
            href="#team"
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'team')}
          >
            Team
          </a>
        </nav>

        {/* Action Button */}
        <div className="nav-actions">
          <button type="button" className="btn-portal-nav" onClick={onOpenPortal}>
            Client Portal
          </button>
          <button
            type="button"
            className="btn-primary-nav"
            onClick={onOpenContact}
          >
            <span>Let's Talk</span>
            <ArrowRight size={15} />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="hamburger-btn"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`bar ${mobileMenuOpen ? 'bar-open-1' : ''}`} />
            <span className={`bar ${mobileMenuOpen ? 'bar-open-2' : ''}`} />
            <span className={`bar ${mobileMenuOpen ? 'bar-open-3' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <nav className="mobile-nav-links">
            <button
              type="button"
              className="mobile-nav-item mobile-portal-link"
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenPortal()
              }}
            >
              Client Portal
            </button>
            <a
              href="#services"
              className="mobile-nav-item"
              onClick={(e) => handleNavClick(e, 'services')}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="mobile-nav-item"
              onClick={(e) => handleNavClick(e, 'portfolio')}
            >
              Portfolio
            </a>
            <a
              href="#metrics"
              className="mobile-nav-item"
              onClick={(e) => handleNavClick(e, 'metrics')}
            >
              Impact
            </a>
            <a
              href="#team"
              className="mobile-nav-item"
              onClick={(e) => handleNavClick(e, 'team')}
            >
              Team & Testimonials
            </a>
            <button
              type="button"
              className="btn-primary btn-mobile-cta"
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenContact()
              }}
            >
              <span>Let's Build Your Website</span>
              <ArrowRight size={16} />
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

