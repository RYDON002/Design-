import Icon from './Icon'

const socialLinks = [
  { label: 'Dribbble profile', icon: 'dribbble' },
  { label: 'LinkedIn profile', icon: 'linkedin' },
  { label: 'GitHub profile', icon: 'github' },
]

function SocialLinks({ id = 'social-links', href = '#social-links', placeholder = false }) {
  return (
    <div className="social-links" id={id} aria-label={placeholder ? 'Social link placeholders' : 'Social links'}>
      {socialLinks.map((item) => (
        <a
          key={item.label}
          href={href}
          aria-label={placeholder ? `${item.label} placeholder` : item.label}
        >
          <Icon name={item.icon} size={17} />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
