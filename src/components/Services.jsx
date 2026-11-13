import {
  PaletteIcon,
  MonitorIcon,
  CodeIcon,
  PlayIcon,
  MegaphoneIcon,
  UsersIcon,
  ArrowRight,
} from './Icons'
import { servicesData } from '../data/agencyData'

export default function Services({ onOpenContact }) {
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'palette':
        return <PaletteIcon size={24} />
      case 'monitor':
        return <MonitorIcon size={24} />
      case 'code':
        return <CodeIcon size={24} />
      case 'play':
        return <PlayIcon size={24} />
      case 'megaphone':
        return <MegaphoneIcon size={24} />
      case 'users':
        return <UsersIcon size={24} />
      default:
        return <MonitorIcon size={24} />
    }
  }

  const handleExploreClick = () => {
    if (onOpenContact) {
      onOpenContact()
    } else {
      const portfolioElem = document.getElementById('portfolio')
      if (portfolioElem) {
        portfolioElem.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section id="services" className="services-section" aria-labelledby="services-title">
      <div className="section-container services-container">
        {/* Left: Introduction and CTA */}
        <div className="services-intro" data-reveal="left">
          <span className="section-badge">Our Services</span>
          <h2 id="services-title" className="section-heading">
            Everything You Need
            <br />
            to Build a Strong Online Presence
          </h2>
          <p className="section-description">
            From stunning designs to powerful functionality, we offer end-to-end web solutions tailored to your goals.
          </p>
          <div className="services-cta-wrap">
            <button
              type="button"
              className="btn-dark"
              onClick={handleExploreClick}
            >
              <span>Explore Our Services</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right: 6 Coordinated Service Cards Grid */}
        <div className="services-grid" role="list">
          {servicesData.map((service) => (
            <article
              key={service.id}
              className="service-card"
              data-reveal="up"
              role="listitem"
              tabIndex={0}
            >
              <div
                className="service-icon-box"
                style={{
                  backgroundColor: service.bg,
                  color: service.color,
                }}
                aria-hidden="true"
              >
                {renderIcon(service.icon)}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-text">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
