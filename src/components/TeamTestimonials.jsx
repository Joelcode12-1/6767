import { useState } from 'react'
import {
  ArrowRight,
  QuoteIcon,
  ChevronLeft,
  ChevronRight,
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
} from './Icons'
import { teamMembers, testimonials } from '../data/agencyData'

export default function TeamTestimonials({ onOpenContact }) {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonialIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  const currentTestimonial = testimonials[currentTestimonialIndex]

  const renderSocialIcon = (iconName) => {
    switch (iconName) {
      case 'linkedin':
        return <LinkedInIcon size={14} />
      case 'twitter':
        return <TwitterIcon size={14} />
      case 'instagram':
        return <InstagramIcon size={14} />
      case 'github':
        return <GitHubIcon size={14} />
      default:
        return <LinkedInIcon size={14} />
    }
  }

  return (
    <section id="team" className="team-testimonials-section" aria-labelledby="team-heading">
      <div className="section-container">
        <div className="team-split-layout">
          {/* Left Column: Team Introduction and Profiles */}
          <div className="team-column">
            <div className="team-intro" data-reveal="left">
              <span className="section-badge">Meet Our Team</span>
              <h2 id="team-heading" className="section-heading">
                Creative Minds.
                <br />
                Technical Experts.
              </h2>
              <p className="section-description">
                We're a team of designers, developers, and strategists passionate about creating digital experiences that matter.
              </p>
              <div className="team-cta-row">
                <button
                  type="button"
                  className="btn-dark"
                  onClick={onOpenContact}
                >
                  <span>Get to Know Us</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* 3 Team Profile Cards */}
            <div className="team-cards-grid" role="list">
              {teamMembers.map((member) => (
                <article
                  key={member.id}
                  className="team-card"
                  role="listitem"
                  data-reveal="up"
                >
                  <div className="team-avatar-box">
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      className="team-avatar-img"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>

                  {/* Compact Social Links */}
                  <div className="team-socials">
                    {member.socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="social-icon-btn"
                        aria-label={`${member.name}'s ${social.name}`}
                      >
                        {renderSocialIcon(social.icon)}
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Column: Client Testimonials */}
          <div className="testimonial-column" data-reveal="right">
            <div className="testimonial-intro">
              <span className="section-badge">What Our Clients Say</span>
              <h2 className="section-heading">
                Trusted by Businesses
                <br />
                Worldwide
              </h2>
            </div>

            {/* Testimonial Card */}
            <div className="testimonial-card-wrap">
              <article
                className="testimonial-card"
                aria-live="polite"
              >
                <div className="quote-mark" aria-hidden="true">
                  <QuoteIcon size={32} />
                </div>

                <blockquote className="testimonial-text">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </blockquote>

                <div className="testimonial-footer">
                  <div className="client-info">
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.author}
                      className="client-avatar"
                    />
                    <div>
                      <h4 className="client-name">{currentTestimonial.author}</h4>
                      <p className="client-role">{currentTestimonial.role}</p>
                    </div>
                  </div>

                  {/* Testimonial Navigation Controls */}
                  <div className="testimonial-controls">
                    <span className="testimonial-counter" aria-label={`Testimonial ${currentTestimonialIndex + 1} of ${testimonials.length}`}>
                      {currentTestimonialIndex + 1} / {testimonials.length}
                    </span>
                    <div className="control-buttons">
                      <button
                        type="button"
                        className="btn-testimonial-nav"
                        onClick={prevTestimonial}
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        type="button"
                        className="btn-testimonial-nav"
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

