import Icon from './Icon'

const socialLinks = [
  { label: 'GitHub profile', icon: 'github', href: 'https://github.com/RYDON002' },
  { label: 'Instagram profile', icon: 'instagram', href: 'https://instagram.com/rydon__001' },
  { label: 'YouTube channel', icon: 'youtube', href: 'https://youtube.com/@rydon001?si=wroKIzuaSCe7Cd9W' },
]

function SocialLinks({ id = 'social-links' }) {
  return (
    <div className="social-links" id={id} aria-label="Social links">
      {socialLinks.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
        >
          <Icon name={item.icon} size={17} />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
