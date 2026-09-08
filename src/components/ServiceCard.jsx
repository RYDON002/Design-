import Icon from './Icon'

function ServiceCard({ icon, title, description, accent }) {
  return (
    <article className={`service-card service-card-${accent}`}>
      <div className="service-icon" aria-hidden="true">
        <Icon name={icon} size={23} />
      </div>

      <div className="service-card-copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <a className="service-link" href="#services" aria-label={`Learn more about ${title}`}>
        <span>Learn more</span>
        <Icon name="arrow" size={15} />
      </a>
    </article>
  )
}

export default ServiceCard
