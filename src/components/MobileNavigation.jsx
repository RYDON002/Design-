import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import '../styles/mobile-navigation.css'

const mobileLinks = [
  { label: 'Home', href: '#home', icon: 'home', active: true },
  { label: 'Services', href: '#services', icon: 'services' },
  { label: 'Portfolio', href: '#projects', icon: 'portfolio' },
  { label: 'Skills', href: '#skills', icon: 'skills' },
  { label: 'Contact', href: '#contact', icon: 'contact' },
]

function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef(null)
  const closeRef = useRef(null)
  const drawerRef = useRef(null)

  const closeMenu = () => {
    triggerRef.current?.focus({ preventScroll: true })
    setIsOpen(false)
  }

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 64.001rem)')
    const closeAtDesktop = (event) => {
      if (event.matches) setIsOpen(false)
    }

    desktopQuery.addEventListener('change', closeAtDesktop)
    return () => desktopQuery.removeEventListener('change', closeAtDesktop)
  }, [])

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus({ preventScroll: true })

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeMenu()
        return
      }

      if (event.key !== 'Tab') return

      const focusableItems = drawerRef.current?.querySelectorAll('a[href], button:not([disabled])')
      if (!focusableItems?.length) return

      const firstItem = focusableItems[0]
      const lastItem = focusableItems[focusableItems.length - 1]

      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault()
        lastItem.focus()
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault()
        firstItem.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <header className="mobile-header">
        <a className="mobile-brand" href="#home" aria-label="Portfolio home">
          <span className="mobile-brand-mark" aria-hidden="true">R</span>
          <span>
            <strong>Portfolio</strong>
            <small>Creative work</small>
          </span>
        </a>

        <button
          className="mobile-menu-trigger"
          type="button"
          ref={triggerRef}
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-drawer"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </header>

      <div className={`mobile-nav-layer${isOpen ? ' is-open' : ''}`} aria-hidden={!isOpen}>
        <button
          className="mobile-nav-overlay"
          type="button"
          onClick={closeMenu}
          tabIndex={isOpen ? 0 : -1}
          aria-label="Close navigation menu"
        />

        <div
          className="mobile-nav-drawer"
          id="mobile-navigation-drawer"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-navigation-title"
        >
          <div className="mobile-drawer-header">
            <div>
              <p>Navigation</p>
              <h2 id="mobile-navigation-title">Explore Portfolio</h2>
            </div>
            <button
              className="mobile-menu-close"
              type="button"
              ref={closeRef}
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              aria-label="Close navigation menu"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <nav className="mobile-drawer-navigation" aria-label="Mobile navigation">
            {mobileLinks.map((item) => (
              <a
                className={item.active ? 'is-active' : undefined}
                href={item.href}
                key={item.label}
                onClick={closeMenu}
                tabIndex={isOpen ? 0 : -1}
                aria-current={item.active ? 'location' : undefined}
              >
                <Icon name={item.icon} size={19} />
                <span>{item.label}</span>
                <Icon className="mobile-link-arrow" name="arrow" size={15} />
              </a>
            ))}
          </nav>

          <div className="mobile-drawer-lower">
            <p>Ready to discuss a future project?</p>
            <a href="#contact" onClick={closeMenu} tabIndex={isOpen ? 0 : -1}>
              <span>Let&apos;s Talk</span>
              <Icon name="send" size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileNavigation
