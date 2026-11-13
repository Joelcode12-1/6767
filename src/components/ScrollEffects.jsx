import { useEffect } from 'react'

export default function ScrollEffects() {
  useEffect(() => {
    const progress = document.querySelector('.scroll-progress-bar')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0

    const updateProgress = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
        const amount = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
        progress?.style.setProperty('--scroll-progress', `${Math.min(amount, 1)}`)
      })
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    updateProgress()

    if (reduceMotion || !('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach((element) => {
        element.classList.add('is-visible')
      })
      return () => {
        cancelAnimationFrame(frame)
        window.removeEventListener('scroll', updateProgress)
        window.removeEventListener('resize', updateProgress)
      }
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -36px 0px' },
    )

    const observeReveals = (root) => {
      if (root.matches?.('[data-reveal]')) revealObserver.observe(root)
      root.querySelectorAll?.('[data-reveal]').forEach((element) => revealObserver.observe(element))
    }

    observeReveals(document)

    // Re-observe newly rendered cards when a portfolio filter changes.
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) observeReveals(node)
        })
      })
    })
    mutationObserver.observe(document.getElementById('root'), { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
      mutationObserver.disconnect()
      revealObserver.disconnect()
    }
  }, [])

  return <div className="scroll-progress-track" aria-hidden="true"><span className="scroll-progress-bar" /></div>
}
