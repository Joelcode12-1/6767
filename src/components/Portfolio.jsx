import { useState, useId } from 'react'
import { ArrowRight } from './Icons'
import { portfolioCategories, portfolioProjects } from '../data/agencyData'

export default function Portfolio({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const filterListId = useId()

  const filteredProjects =
    activeCategory === 'All'
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="portfolio-section" aria-labelledby="portfolio-title">
      <div className="section-container">
        {/* Top Header Row: Split Heading and Filters */}
        <div className="portfolio-header">
          <div className="portfolio-intro" data-reveal="left">
            <span className="section-badge">Our Portfolio</span>
            <h2 id="portfolio-title" className="section-heading">
              Real Projects.
              <br />
              Real Results.
            </h2>
            <p className="section-description">
              A selection of websites we've designed and developed for businesses across various industries.
            </p>
            <div className="portfolio-cta-row">
              <button
                type="button"
                className="btn-dark"
                onClick={() => setActiveCategory('All')}
              >
                <span>View All Projects</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="portfolio-filters-wrap">
            <div
              className="filter-pill-group"
              role="radiogroup"
              aria-label="Filter portfolio projects by category"
              id={filterListId}
            >
              {portfolioCategories.map((category) => {
                const isSelected = activeCategory === category
                return (
                  <button
                    key={category}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    className={`filter-btn ${isSelected ? 'filter-btn-active' : ''}`}
                    onClick={() => {
                      setActiveCategory(category)
                      setSelectedProject(null)
                    }}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* 3-Column Project Cards Grid */}
        <div
          className="portfolio-grid"
          role="region"
          aria-live="polite"
          aria-label={`Showing ${filteredProjects.length} projects in ${activeCategory}`}
        >
          {filteredProjects.map((project) => (
            <button
              key={project.id}
              className="project-card"
              type="button"
              aria-expanded={selectedProject?.id === project.id}
              aria-label={`View details for ${project.title}`}
              onClick={() => setSelectedProject((current) => current?.id === project.id ? null : project)}
              data-reveal="up"
            >
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="project-thumbnail"
                  loading="lazy"
                />
                <span className="project-badge">{project.badge}</span>
              </div>
              <div className="project-meta">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-industry">{project.industry}</span>
              </div>
            </button>
          ))}
        </div>
        {selectedProject && (
          <article className="project-detail-panel" aria-live="polite" data-reveal="up">
            <div>
              <span className="project-detail-kicker">{selectedProject.category} · {selectedProject.industry}</span>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.summary}</p>
            </div>
            <div className="project-detail-actions">
              <button type="button" className="project-detail-cta" onClick={onOpenContact}>Build something similar</button>
              <button type="button" className="project-detail-close" onClick={() => setSelectedProject(null)} aria-label="Close project details">×</button>
            </div>
          </article>
        )}
      </div>
    </section>
  )
}

