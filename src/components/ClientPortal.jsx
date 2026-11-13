import { useCallback, useEffect, useRef, useState } from 'react'
import { CloseIcon, LogoMark, ArrowRight } from './Icons'

const particles = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  left: `${(index * 37 + 13) % 100}%`,
  top: `${(index * 61 + 7) % 100}%`,
  size: `${2 + ((index * 7) % 5)}px`,
  duration: `${7 + ((index * 11) % 12)}s`,
  delay: `${-((index * 3) % 18)}s`,
  drift: `${((index % 2 ? 1 : -1) * (18 + ((index * 13) % 50)))}px`,
}))

export default function ClientPortal({ isOpen, onClose, onRequestAccess }) {
  const [showPassword, setShowPassword] = useState(false)
  const [notice, setNotice] = useState('')
  const emailRef = useRef(null)
  const closePortal = useCallback(() => {
    setNotice('')
    onClose()
  }, [onClose])

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const previouslyFocused = document.activeElement
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closePortal()
        return
      }

      if (event.key === 'Tab') {
        const focusable = document.querySelectorAll('.portal-screen button:not([disabled]), .portal-screen input:not([disabled]), .portal-screen a[href]')
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }
    }

    document.body.style.overflow = 'hidden'
    emailRef.current?.focus()
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus?.()
    }
  }, [isOpen, closePortal])

  if (!isOpen) return null

  const handleSubmit = (event) => {
    event.preventDefault()
    setNotice('Client portal sign-in is a preview and is not connected yet. Contact our team to request access.')
  }

  return (
    <div
      className="portal-screen"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closePortal()
      }}
    >
      <div className="portal-atmosphere" aria-hidden="true">
        <div className="portal-grid" />
        <div className="portal-glow portal-glow-one" />
        <div className="portal-glow portal-glow-two" />
        <div className="portal-orbit portal-orbit-one" />
        <div className="portal-orbit portal-orbit-two" />
        <div className="portal-orbit portal-orbit-three" />
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="portal-particle"
            style={{
              '--particle-left': particle.left,
              '--particle-top': particle.top,
              '--particle-size': particle.size,
              '--particle-duration': particle.duration,
              '--particle-delay': particle.delay,
              '--particle-drift': particle.drift,
            }}
          />
        ))}
      </div>

      <button type="button" className="portal-close" onClick={closePortal} aria-label="Close client portal">
        <CloseIcon size={20} />
      </button>

      <div className="portal-layout">
        <div className="portal-story">
          <a href="#hero" className="portal-brand" onClick={closePortal}>
            <LogoMark size={42} />
            <span>NEXORA<span className="portal-brand-light"> / CLIENTS</span></span>
          </a>
          <div className="portal-story-copy">
            <span className="portal-eyebrow"><i /> CLIENT SPACE</span>
            <h1>Good work<br />keeps moving.</h1>
            <p>A calm place to follow your project, review milestones, and keep every decision in orbit.</p>
          </div>
          <div className="portal-orbit-note"><span className="orbit-note-dot" /> Your next milestone is closer than it looks.</div>
        </div>

        <section className="portal-card" aria-label="Sign in to your client portal">
          <div className="portal-card-heading">
            <span className="portal-card-kicker">WELCOME BACK</span>
            <h2 id="portal-title">Sign in to your space</h2>
            <p>Enter your project account details to continue.</p>
          </div>

          <form className="portal-form" onSubmit={handleSubmit}>
            <label className="portal-label" htmlFor="portal-email">Email address</label>
            <input ref={emailRef} id="portal-email" className="portal-input" type="email" autoComplete="email" placeholder="you@company.com" required />

            <div className="portal-password-heading">
              <label className="portal-label" htmlFor="portal-password">Password</label>
              <button className="portal-text-button" type="button" onClick={() => setNotice('For password help, contact your Nexora project lead.')}>Forgot password?</button>
            </div>
            <div className="portal-password-wrap">
              <input id="portal-password" className="portal-input" type={showPassword ? 'text' : 'password'} autoComplete="current-password" placeholder="Enter your password" required />
              <button type="button" className="portal-show-password" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? 'Hide password' : 'Show password'}>
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            <label className="portal-remember"><input type="checkbox" /> <span>Keep me signed in</span></label>
            {notice && <p className="portal-notice" role="status">{notice}</p>}
            <button className="portal-submit" type="submit">
              <span>Continue to portal</span><ArrowRight size={17} />
            </button>
          </form>

          <p className="portal-access-copy">New to Nexora? <button type="button" className="portal-text-button" onClick={() => { setNotice(''); onRequestAccess() }}>Request client access</button></p>
          <div className="portal-card-footer"><span className="portal-lock" aria-hidden="true">⌑</span> A private space for Nexora clients</div>
        </section>
      </div>
      <div className="portal-copyright">© {new Date().getFullYear()} Nexora Tech</div>
    </div>
  )
}
