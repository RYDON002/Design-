import Icon from './Icon'

function ProjectCard({ category, title, description, screenshot, actionLabel, url }) {
  return (
    <article className="project-card">
      <div className="project-thumbnail">
        <img src={screenshot} alt={`${title} website screenshot`} loading="lazy" />
      </div>

      <div className="project-card-content">
        <p className="project-category">{category}</p>
        <div className="project-title-row">
          <h3>{title}</h3>
        </div>
        <p className="project-description">{description}</p>
        <a className="project-action" href={url} target="_blank" rel="noopener noreferrer" aria-label={`${actionLabel}: ${title} (opens in a new tab)`}>
          <span>{actionLabel}</span>
          <Icon name="arrow" size={16} />
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
