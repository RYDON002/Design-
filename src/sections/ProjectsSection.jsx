import Icon from '../components/Icon'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import mhwunScreenshot from '../assets/mhwun-project.png'
import highTechScreenshot from '../assets/high-tech-project.png'
import belnavoScreenshot from '../assets/belnavo-project.png'
import globalmartScreenshot from '../assets/globalmart-project.png'
import '../styles/projects.css'

const projects = [
  {
    category: 'Union / Membership Platform',
    title: 'MHWUN Katsina State Council Website',
    description: 'Official digital platform for the Medical and Health Workers Union of Nigeria, Katsina State Council, providing union information, updates, membership resources, and digital member services.',
    screenshot: mhwunScreenshot,
    actionLabel: 'View Live',
    url: 'https://mhwunktn.org/',
  },
  {
    category: 'Corporate Website',
    title: 'High Tech & Technology Welders',
    description: 'Responsive corporate website presenting company services, projects, industries, business information, and quotation/contact pathways.',
    screenshot: highTechScreenshot,
    actionLabel: 'View Live',
    url: 'https://httwcorg.vercel.app/',
  },
  {
    category: 'Digital Services Platform',
    title: 'BelNavo Tech',
    description: 'A digital services platform showcasing web development, design, branding and related services, with online booking and business management functionality.',
    screenshot: belnavoScreenshot,
    actionLabel: 'View Live',
    url: 'https://belnavo-tech.onrender.com/',
  },
  {
    category: 'E-commerce Frontend',
    title: 'GlobalMart',
    description: 'Responsive e-commerce mall frontend with product categories, shopping-cart interactions, product browsing, and administrative interface elements.',
    screenshot: globalmartScreenshot,
    actionLabel: 'View Code',
    url: 'https://github.com/RYDON002/GlobalMart-Mall-Frontend.git',
  },
]

function ProjectsSection() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="projects-heading-row">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          description="A selection of real websites and digital platforms."
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
