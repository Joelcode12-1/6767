import horizonLivingImg from '../assets/portfolio/horizon-living.svg'

export default function DeviceShowcase() {
  return (
    <div className="showcase-container" aria-label="Device showcase preview">
      {/* Background radial glow */}
      <div className="showcase-glow" aria-hidden="true" />

      {/* Main Laptop Mockup */}
      <div className="laptop-wrapper">
        <div className="laptop-lid">
          <div className="laptop-screen">
            {/* Screen Notch / Camera */}
            <div className="screen-camera">
              <span className="camera-lens" />
            </div>

            {/* Simulated Live Website in Laptop Screen */}
            <div className="screen-content">
              {/* Mini Website Header */}
              <div className="site-header">
                <div className="site-logo">
                  <span className="logo-dot" />
                  <strong>Horizon Living</strong>
                </div>
                <nav className="site-nav" aria-label="Simulated site nav">
                  <span>Home</span>
                  <span>Properties</span>
                  <span>About</span>
                  <span>Contact</span>
                  <span className="site-hamburger">☰</span>
                </nav>
              </div>

              {/* Mini Website Hero */}
              <div className="site-hero">
                <div className="site-hero-overlay">
                  <span className="site-tagline">Architectural Masterpiece</span>
                  <h3 className="site-headline">
                    Modern Living
                    <br />
                    <span>Redefined</span>
                  </h3>
                  <p className="site-sub">
                    Premium sustainable properties for a better tomorrow.
                  </p>
                  <div className="site-cta-row">
                    <span className="site-cta-btn">View Properties →</span>
                  </div>
                </div>
                <img
                  src={horizonLivingImg}
                  alt="Horizon Living website preview"
                  className="site-bg-img"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Laptop Keyboard Base & Hinge */}
        <div className="laptop-base">
          <div className="laptop-base-top">
            <div className="base-hinge" />
            <div className="base-notch" />
          </div>
          <div className="laptop-base-bottom" />
        </div>

        {/* Realistic Under-Laptop Reflection / Shadow */}
        <div className="laptop-shadow" aria-hidden="true" />
      </div>

      {/* Overlapping Smartphone Mockup */}
      <div className="phone-wrapper">
        <div className="phone-body">
          {/* Dynamic Island / Notch */}
          <div className="phone-notch">
            <span className="speaker-slot" />
            <span className="front-cam" />
          </div>

          {/* Status bar */}
          <div className="phone-status-bar">
            <span>9:41</span>
            <div className="phone-indicators">
              <span className="signal-bars">●●●</span>
              <span className="battery-icon">🔋</span>
            </div>
          </div>

          {/* Phone Screen Website Content */}
          <div className="phone-screen">
            <div className="phone-site-header">
              <span className="phone-logo">Horizon Living</span>
              <span className="phone-menu-btn">☰</span>
            </div>

            <div className="phone-hero">
              <span className="phone-tag">Luxury</span>
              <h4 className="phone-title">Modern Living Redefined</h4>
              <p className="phone-desc">
                Premium properties for a better tomorrow.
              </p>
              <span className="phone-cta">View Properties</span>

              <div className="phone-img-wrap">
                <img
                  src={horizonLivingImg}
                  alt="Mobile preview"
                  className="phone-mock-img"
                />
              </div>
            </div>
          </div>

          {/* Home indicator bar at bottom */}
          <div className="phone-home-indicator" />
        </div>

        {/* Phone Drop Shadow */}
        <div className="phone-shadow" aria-hidden="true" />
      </div>

      {/* Cursive Handwriting Note: Great Design Builds Trust */}
      <div className="script-annotation" aria-hidden="true">
        <span className="script-text">Great Design Builds Trust</span>
        <svg
          className="script-arrow"
          width="48"
          height="32"
          viewBox="0 0 48 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 26C16 10 32 4 44 8M44 8L37 3M44 8L39 15"
            stroke="#94a3b8"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

