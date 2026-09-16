import { useState } from 'react'
import Icon from './Icon'
import SocialLinks from './SocialLinks'
import '../styles/sidebar.css'

const navigationItems = [
  { label: 'Home', icon: 'home', href: '#home', active: true },
  { label: 'Services', icon: 'services', href: '#services' },
  { label: 'Portfolio', icon: 'portfolio', href: '#projects' },
  { label: 'Skills', icon: 'skills', href: '#skills' },
  { label: 'Contact', icon: 'contact', href: '#contact' },
]

function Sidebar() {
  const [showCvMessage, setShowCvMessage] = useState(false)

  return (
    <aside className="sidebar" aria-label="Portfolio sidebar">
      <a className="sidebar-brand" href="#content-stage" aria-label="Portfolio home">
        <span className="brand-mark" aria-hidden="true">R</span>
        <span className="brand-copy">
        <strong>MUBARAK GONI SULE</strong>
          <span>Full-Stack &amp; UI Design</span>
        </span>
      </a>

      <nav className="sidebar-navigation" aria-label="Primary navigation">
        {navigationItems.map((item) => (
          <a
            className={`sidebar-link${item.active ? ' is-active' : ''}`}
            href={item.href}
            key={item.label}
            aria-current={item.active ? 'location' : undefined}
          >
            <Icon name={item.icon} size={18} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-lower">
        <div className="availability-card">
          <p className="availability-title">Available for Projects</p>
          <p>Open to freelance work, collaborations, and selected development opportunities. Let’s build something useful together.</p>
          <a className="hire-button" href="#contact">
            <span>Hire Me</span>
            <Icon name="arrow" size={15} />
          </a>
        </div>

        <div className="cv-area">
          <button className="download-link" type="button" onClick={() => setShowCvMessage(true)} aria-describedby={showCvMessage ? 'cv-status' : undefined}>
            <span>
              <small>Profile document</small>
              <strong>CV coming soon</strong>
            </span>
            <Icon name="download" size={16} />
          </button>
          <p className="cv-status" id="cv-status" role="status" aria-live="polite">
            {showCvMessage ? 'CV coming soon. My updated CV will be available for download shortly.' : ''}
          </p>
        </div>

        <div className="sidebar-socials">
          <small>Follow me</small>
          <SocialLinks />
        </div>
      </div>

      <div className="sidebar-orbits" aria-hidden="true" />
    </aside>
  )
}

export default Sidebar
