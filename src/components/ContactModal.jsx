import { useState, useEffect } from 'react'
import { CloseIcon, CheckIcon, ArrowRight } from './Icons'

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Design',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      name: '',
      email: '',
      service: 'Web Design',
      message: '',
    })
    onClose()
  }

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="modal-card">
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close contact dialog"
        >
          <CloseIcon size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="modal-header">
              <span className="section-badge">Start a Project</span>
              <h2 id="contact-modal-title" className="modal-title">
                Let's Build Something
                <br />
                Extraordinary
              </h2>
              <p className="modal-subtitle">
                Tell us about your project goals. We'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              {/* Service Selection */}
              <div className="form-group">
                <label className="form-label">I'm interested in</label>
                <div className="service-pill-selector">
                  {['Web Design', 'Web Development', 'Brand Identity', 'Motion & Video', 'UX/UI Strategy'].map(
                    (s) => (
                      <button
                        key={s}
                        type="button"
                        className={`pill-option ${formData.service === s ? 'pill-option-selected' : ''}`}
                        onClick={() => setFormData({ ...formData, service: s })}
                      >
                        {s}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Name & Email */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Work Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="form-input"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Project Details
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  placeholder="Share a brief overview of your vision, timeline, and expectations..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="form-textarea"
                />
              </div>

              <div className="modal-actions">
                <button type="submit" className="btn-primary btn-submit">
                  <span>Send Proposal Request</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="success-state">
            <div className="success-icon-wrap">
              <CheckIcon size={32} />
            </div>
            <h3 className="success-title">Message Received!</h3>
            <p className="success-text">
              Thank you, <strong>{formData.name}</strong>. Our lead design director will review your project requirements and email you at <strong>{formData.email}</strong> within 24 hours.
            </p>
            <button
              type="button"
              className="btn-primary"
              onClick={handleReset}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

