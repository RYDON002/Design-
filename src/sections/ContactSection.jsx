import ContactForm from '../components/ContactForm'
import Icon from '../components/Icon'
import SectionHeading from '../components/SectionHeading'
import SocialLinks from '../components/SocialLinks'
import '../styles/contact.css'

const contactDetails = [
  { label: 'Email', value: 'programmerrydon@gmail.com', href: 'mailto:programmerrydon@gmail.com', icon: 'contact' },
  { label: 'Phone / WhatsApp', value: '+234 816 299 3717', href: 'https://wa.me/2348162993717', icon: 'phone' },
  { label: 'Location', value: 'Nigeria', icon: 'location' },
]

function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-layout">
        <div className="contact-info-panel">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's Work Together"
            description="Have a project, collaboration, or development opportunity in mind? Get in touch and let&apos;s discuss how I can help."
            titleId="contact-title"
          />

          <address className="contact-details">
            {contactDetails.map((detail) => (
              <div className="contact-detail" key={detail.label}>
                <span className="contact-detail-icon" aria-hidden="true">
                  <Icon name={detail.icon} size={18} />
                </span>
                <div>
                  <span>{detail.label}</span>
                  {detail.href ? <a href={detail.href} target={detail.href.startsWith('https') ? '_blank' : undefined} rel={detail.href.startsWith('https') ? 'noopener noreferrer' : undefined}>{detail.value}</a> : <strong>{detail.value}</strong>}
                </div>
              </div>
            ))}
          </address>

          <div className="contact-socials">
            <p>Connect with me</p>
            <SocialLinks id="contact-social-links" />
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

export default ContactSection
