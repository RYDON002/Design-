import Icon from './Icon'

function ProjectThumbnail({ variant }) {
  return (
    <div className={`project-thumbnail project-thumbnail-${variant}`} aria-hidden="true">
      {variant === 'website' && (
        <div className="website-mockup">
          <div className="mockup-toolbar"><i /><i /><i /></div>
          <div className="website-layout">
            <span className="website-copy-block" />
            <span className="website-button-block" />
            <span className="website-image-block" />
          </div>
        </div>
      )}

      {variant === 'application' && (
        <div className="application-mockup">
          <span className="application-sidebar" />
          <div className="application-content">
            <span className="application-line application-line-short" />
            <div className="application-chart">
              <i /><i /><i /><i /><i />
            </div>
            <div className="application-panels"><span /><span /></div>
          </div>
        </div>
      )}

      {variant === 'brand' && (
        <div className="brand-mockup">
          <span className="brand-symbol"><i /><i /></span>
          <span className="brand-card brand-card-one" />
          <span className="brand-card brand-card-two" />
          <span className="brand-wordmark" />
        </div>
      )}

      {variant === 'experience' && (
        <div className="experience-mockup">
          <div className="device-frame">
            <span className="device-speaker" />
            <span className="device-hero" />
            <span className="device-line" />
            <span className="device-line device-line-short" />
          </div>
          <span className="floating-panel floating-panel-left" />
          <span className="floating-panel floating-panel-right" />
        </div>
      )}
    </div>
  )
}

function ProjectCard({ category, title, description, visual }) {
  return (
    <article className="project-card">
      <ProjectThumbnail variant={visual} />

      <div className="project-card-content">
        <p className="project-category">{category}</p>
        <div className="project-title-row">
          <h3>{title}</h3>
          <a href="#projects" aria-label={`View ${title} project`}>
            <Icon name="arrow" size={16} />
          </a>
        </div>
        <p className="project-description">{description}</p>
      </div>
    </article>
  )
}

export default ProjectCard
