import Icon from './Icon'

const socialLinks = [
  { label: 'Dribbble profile', icon: 'dribbble' },
  { label: 'LinkedIn profile', icon: 'linkedin' },
  { label: 'GitHub profile', icon: 'github' },
]

function SocialLinks() {
  return (
    <div className="social-links" id="social-links" aria-label="Social links">
      {socialLinks.map((item) => (
        <a key={item.label} href="#social-links" aria-label={item.label}>
          <Icon name={item.icon} size={17} />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
