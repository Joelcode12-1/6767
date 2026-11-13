import { impactMetrics } from '../data/agencyData'

export default function Metrics() {
  return (
    <section id="metrics" className="metrics-section" aria-labelledby="metrics-title">
      <div className="section-container metrics-container">
        {/* Left Side: Section Label & Heading */}
        <div className="metrics-header" data-reveal="left">
          <span className="section-badge-dark">Our Impact</span>
          <h2 id="metrics-title" className="metrics-heading">
            Numbers That
            <br />
            Tell Our Story
          </h2>
        </div>

        {/* Right Side: 4 Prominent Stat Metrics with Dividers */}
        <div className="metrics-grid" role="list">
          {impactMetrics.map((item, index) => (
            <div key={item.label} className="metric-item" role="listitem" data-reveal="up">
              <span className="metric-value">{item.value}</span>
              <span className="metric-label">{item.label}</span>
              {index < impactMetrics.length - 1 && (
                <div className="metric-divider" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

