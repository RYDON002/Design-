import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import '../styles/services.css'

const services = [
  {
    title: 'Web Applications',
    description: 'Full-stack web applications with modern responsive frontends and reliable backend architecture, focused on performance, maintainability, and real user needs.',
    icon: 'code',
    accent: 'pink',
  },
  {
    title: 'UI & Product Design',
    description: 'User-centered interface design, responsive layouts, interaction design, prototypes, and implementation-ready visual systems.',
    icon: 'pen',
    accent: 'purple',
  },
  {
    title: 'APIs & Backend Development',
    description: 'Secure and scalable REST APIs, backend services, database design, authentication flows, and deployment-ready application architecture.',
    icon: 'layers',
    accent: 'blue',
  },
  {
    title: 'Consulting & Code Review',
    description: 'Architecture reviews, implementation guidance, debugging, performance improvements, and practical recommendations for improving software quality.',
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
