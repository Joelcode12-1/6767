import {
  LogoMark,
  ArrowRight,
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
  YouTubeIcon,
} from './Icons'
import footerBg from '../assets/footer-bg.svg'

export default function FooterCTA({ onOpenContact }) {
  const currentYear = new Date().getFullYear()

  const handleScrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-cta-section" aria-label="Footer and Contact">
      {/* Mountain Landscape Background with Dark Overlay */}
      <div
        className="footer-bg-wrap"
        style={{ backgroundImage: `url(${footerBg})` }}
        aria-hidden="true"
      >
        <div className="footer-gradient-overlay" />
      </div>

      <div className="section-container footer-content-container">
        {/* Top Contact Call-to-Action Banner */}
        <div className="footer-cta-banner" data-reveal="up">
          <div className="footer-cta-text">
            <span className="section-badge-dark">Let's Work Together</span>
            <h2 className="footer-cta-title">
              Your Vision.
              <br />
              Our Expertise.
            </h2>
            <p className="footer-cta-desc">
              Have a project in mind? We'd love to hear from you.
            </p>
          </div>

          <div className="footer-cta-action">
            <button
              type="button"
              className="btn-primary btn-footer-cta"
              onClick={onOpenContact}
            >
              <span>Get in Touch</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Divider Line */}
        <div className="footer-divider" aria-hidden="true" />

        {/* Bottom Compact Brand Footer */}
        <div className="footer-bottom-bar">
          <div className="footer-brand-wrap">
            <a href="#hero" onClick={handleScrollToTop} className="footer-brand-link">
              <LogoMark size={28} />
              <div className="footer-brand-info">
                <span className="footer-brand-name">NEXORA TECH</span>
                <span className="footer-brand-motto">
                  Modern Websites. Real Results.
                </span>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="footer-social-links" aria-label="Social media channels">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-social-btn"
              aria-label="Follow Nexora Tech on LinkedIn"
            >
              <LinkedInIcon size={16} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-social-btn"
              aria-label="Follow Nexora Tech on X"
            >
              <TwitterIcon size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-social-btn"
              aria-label="Follow Nexora Tech on Instagram"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-social-btn"
              aria-label="Subscribe to Nexora Tech on YouTube"
            >
              <YouTubeIcon size={16} />
            </a>
          </div>

          {/* Copyright & Legal */}
          <div className="footer-copyright">
            <p>© {currentYear} Nexora Tech. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

