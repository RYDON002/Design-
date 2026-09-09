import ContactForm from '../components/ContactForm'
import Icon from '../components/Icon'
import SectionHeading from '../components/SectionHeading'
import SocialLinks from '../components/SocialLinks'
import '../styles/contact.css'

const contactDetails = [
  { label: 'Email placeholder', value: 'your@email.com', icon: 'contact' },
  { label: 'Phone placeholder', value: '+000 000 000 0000', icon: 'phone' },
  { label: 'Location placeholder', value: 'Your Location', icon: 'location' },
]

function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-layout">
        <div className="contact-info-panel">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's Work Together"
            description="Share a project idea when you're ready; these contact details are temporary placeholders."
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
                  <strong>{detail.value}</strong>
                </div>
              </div>
            ))}
          </address>

          <div className="contact-socials">
            <p>Social placeholders</p>
            <SocialLinks id="contact-social-links" href="#contact" placeholder />
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

export default ContactSection
