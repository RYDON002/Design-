import Icon from '../components/Icon'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import '../styles/projects.css'

const projects = [
  {
    category: 'Responsive Web',
    title: 'Business Website',
    description: 'A polished web presence with clear content structure and purposeful interactions.',
    visual: 'website',
  },
  {
    category: 'Product Interface',
    title: 'Web Application',
    description: 'A focused application concept that makes complex information easier to navigate.',
    visual: 'application',
  },
  {
    category: 'Visual System',
    title: 'Brand Platform',
    description: 'A flexible digital identity system designed for consistent presentation across screens.',
    visual: 'brand',
  },
  {
    category: 'Interactive Design',
    title: 'Digital Experience',
    description: 'A responsive experience concept balancing visual character with intuitive usability.',
    visual: 'experience',
  },
]

function ProjectsSection() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="projects-heading-row">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          description="A small collection of temporary project concepts demonstrating the intended portfolio presentation."
          titleId="projects-title"
        />

        <a className="view-projects-link" href="#projects">
          <span>View All Projects</span>
          <Icon name="arrow" size={15} />
        </a>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
