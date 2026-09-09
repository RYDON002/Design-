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
            <strong>RYDON</strong>
            <p>Full-Stack Development &amp; UI Design.</p>
          </div>
        </div>

        <nav className="footer-navigation" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="footer-socials">
          <SocialLinks id="footer-social-links" />
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} RYDON. All rights reserved.</p>
        <p>Mubarak Goni Sule</p>
      </div>
    </footer>
  )
}

export default Footer
