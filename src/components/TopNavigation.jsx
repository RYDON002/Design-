import Icon from './Icon'
import '../styles/navigation.css'

const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#content-stage' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#projects' },
  { label: 'Blog', href: '#content-stage' },
  { label: 'Contact', href: '#contact' },
]

function TopNavigation() {
  return (
    <header className="top-navigation">
      <nav aria-label="Secondary navigation">
        {navigationItems.map((item, index) => (
          <a
            className={index === 0 ? 'is-active' : undefined}
            href={item.href}
            key={item.label}
            aria-current={index === 0 ? 'page' : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a className="talk-button" href="#contact">
        <span>Let&apos;s Talk</span>
        <Icon name="send" size={15} />
      </a>
    </header>
  )
}

export default TopNavigation
