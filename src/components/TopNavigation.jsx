import Icon from './Icon'
import '../styles/navigation.css'

const navigationItems = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact']

function TopNavigation() {
  return (
    <header className="top-navigation">
      <nav aria-label="Secondary navigation">
        {navigationItems.map((item, index) => (
          <a
            className={index === 0 ? 'is-active' : undefined}
            href="#content-stage"
            key={item}
            aria-current={index === 0 ? 'page' : undefined}
          >
            {item}
          </a>
        ))}
      </nav>

      <a className="talk-button" href="#content-stage">
        <span>Let&apos;s Talk</span>
        <Icon name="send" size={15} />
      </a>
    </header>
  )
}

export default TopNavigation
