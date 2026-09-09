import SocialLinks from './SocialLinks'
import '../styles/footer.css'

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <span className="footer-brand-mark" aria-hidden="true">R</span>
          <div>
            <strong>Portfolio Placeholder</strong>
            <p>Thoughtful digital work, presented with clarity.</p>
          </div>
        </div>

        <nav className="footer-navigation" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="footer-socials">
          <SocialLinks id="footer-social-links" href="#contact" placeholder />
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Portfolio. All rights reserved.</p>
        <p>Temporary portfolio content.</p>
      </div>
    </footer>
  )
}

export default Footer
