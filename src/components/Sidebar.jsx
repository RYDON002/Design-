import Icon from './Icon'
import SocialLinks from './SocialLinks'
import '../styles/sidebar.css'

const navigationItems = [
  { label: 'Home', icon: 'home', href: '#home', active: true },
  { label: 'About', icon: 'user', href: '#content-stage' },
  { label: 'Services', icon: 'services', href: '#services' },
  { label: 'Portfolio', icon: 'portfolio', href: '#projects' },
  { label: 'Skills', icon: 'skills', href: '#skills' },
  { label: 'Blog', icon: 'blog', href: '#content-stage' },
  { label: 'Contact', icon: 'contact', href: '#contact' },
]

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Portfolio sidebar">
      <a className="sidebar-brand" href="#content-stage" aria-label="Portfolio home">
        <span className="brand-mark" aria-hidden="true">R</span>
        <span className="brand-copy">
          <strong>Portfolio</strong>
          <span>Creative work</span>
        </span>
      </a>

      <nav className="sidebar-navigation" aria-label="Primary navigation">
        {navigationItems.map((item) => (
          <a
            className={`sidebar-link${item.active ? ' is-active' : ''}`}
            href={item.href}
            key={item.label}
            aria-current={item.active ? 'page' : undefined}
          >
            <Icon name={item.icon} size={18} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-lower">
        <div className="availability-card">
          <p className="availability-title">Available for<br />Freelance Projects</p>
          <p>Have a project in mind? Let&apos;s create something meaningful.</p>
          <a className="hire-button" href="#content-stage">
            <span>Hire Me</span>
            <Icon name="arrow" size={15} />
          </a>
        </div>

        <a className="download-link" href="#content-stage">
          <span>
            <small>Download CV</small>
            <strong>Portfolio CV</strong>
          </span>
          <Icon name="download" size={16} />
        </a>

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
