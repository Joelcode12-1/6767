import {
  LogoMark,
  LightningIcon,
  MobileIcon,
  SearchIcon,
  TrendingIcon,
  ArrowRight,
} from './Icons'
import DeviceShowcase from './DeviceShowcase'
import { brandInfo, heroBenefits } from '../data/agencyData'

export default function Hero({ onOpenContact }) {
  const getIcon = (type) => {
    switch (type) {
      case 'lightning':
        return <LightningIcon size={18} />
      case 'mobile':
        return <MobileIcon size={18} />
      case 'search':
        return <SearchIcon size={18} />
      case 'trending':
        return <TrendingIcon size={18} />
      default:
        return <LightningIcon size={18} />
    }
  }

  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-radial-bg" aria-hidden="true" />
      <div className="hero-grid-pattern" aria-hidden="true" />

      <div className="section-container hero-container">
        {/* Left Column: Brand & Copy */}
        <div className="hero-content" data-reveal="left">
          {/* Compact Brand Badge */}
          <div className="hero-brand-badge">
            <LogoMark size={28} />
            <div className="hero-badge-text">
              <span className="badge-name">{brandInfo.name}</span>
              <span className="badge-motto">{brandInfo.tagline}</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 id="hero-heading" className="hero-title">
            {brandInfo.headline}
            <span className="hero-title-accent">
              {' '}{brandInfo.headlineAccent}
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="hero-description">{brandInfo.subheadline}</p>

          {/* 4 Concise Benefit Highlights with Icons */}
          <div className="hero-highlights-grid" role="list">
            {heroBenefits.map((benefit) => (
              <div key={benefit.id} className="highlight-item" role="listitem">
                <div className="highlight-icon-wrap" aria-hidden="true">
                  {getIcon(benefit.icon)}
                </div>
                <span className="highlight-label">{benefit.title}</span>
              </div>
            ))}
          </div>

          {/* Primary CTA */}
          <div className="hero-cta-wrapper">
            <button
              type="button"
              className="btn-primary btn-hero"
              onClick={onOpenContact}
            >
              <span>{brandInfo.heroCta}</span>
              <ArrowRight size={18} className="btn-arrow" />
            </button>
          </div>
        </div>

        {/* Right Column: Layered Device Showcase */}
        <div className="hero-visual" data-reveal="right">
          <DeviceShowcase />
        </div>
      </div>
    </section>
  )
}

