import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import '../styles/services.css'

const services = [
  {
    title: 'Web Development',
    description: 'Responsive, maintainable websites built around clear goals and thoughtful user journeys.',
    icon: 'code',
    accent: 'pink',
  },
  {
    title: 'UI/UX Design',
    description: 'Clean interfaces and intuitive experiences shaped for clarity, accessibility, and ease of use.',
    icon: 'pen',
    accent: 'purple',
  },
  {
    title: 'Web Applications',
    description: 'Purposeful interactive products that turn complex requirements into simple digital workflows.',
    icon: 'layers',
    accent: 'blue',
  },
  {
    title: 'Digital Solutions',
    description: 'Flexible digital concepts and prototypes designed to explore ideas and support future growth.',
    icon: 'sparkles',
    accent: 'coral',
  },
]

function ServicesSection() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <SectionHeading
        eyebrow="What I Do"
        title="My Services"
        description="A focused set of design and development capabilities for building thoughtful digital products."
        titleId="services-title"
      />

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
