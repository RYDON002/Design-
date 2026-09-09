import Icon from '../components/Icon'
import SectionHeading from '../components/SectionHeading'
import '../styles/stats-skills.css'

const stats = [
  { value: 'Full', label: 'Stack Development', icon: 'sparkles' },
  { value: 'UI', label: 'Design Focus', icon: 'portfolio' },
  { value: 'API', label: 'Backend Development', icon: 'code' },
  { value: 'Git', label: 'Driven Workflow', icon: 'layers' },
]

const skillGroups = [
  {
    title: 'Frontend',
    icon: 'code',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Responsive Design', 'Accessibility', 'Performance Optimization'],
  },
  {
    title: 'Backend',
    icon: 'layers',
    skills: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'Authentication', 'JWT', 'Database Design'],
  },
  {
    title: 'Tools',
    icon: 'pen',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Docker', 'CI-ready workflows'],
  },
]

const experienceItems = [
  {
    role: 'Full-Stack Development',
    description: 'Building complete web solutions across frontend interfaces, backend services, APIs, and databases.',
  },
  {
    role: 'UI & Product Design',
    description: 'Designing responsive, accessible, and user-focused interfaces with attention to interaction and visual consistency.',
  },
  {
    role: 'Development Workflow',
    description: 'Using Git-based workflows, maintainable architecture, testing-minded development, and deployment-ready practices.',
  },
]

function StatItem({ value, label, icon }) {
  return (
    <div className="stat-item">
      <span className="stat-icon" aria-hidden="true">
        <Icon name={icon} size={22} />
      </span>
      <div>
        <dt>{value}</dt>
        <dd>{label}</dd>
      </div>
    </div>
  )
}

function SkillGroup({ title, icon, skills }) {
  return (
    <div className="skill-group">
      <div className="skill-group-heading">
        <span aria-hidden="true"><Icon name={icon} size={17} /></span>
        <h3>{title}</h3>
      </div>
      <ul className="skill-list" aria-label={`${title} skill placeholders`}>
        {skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
    </div>
  )
}

function StatsSkillsSection() {
  return (
    <>
      <section className="stats-section" aria-labelledby="stats-title">
        <h2 className="sr-only" id="stats-title">Placeholder portfolio statistics</h2>
        <div className="stats-strip">
          <p className="stats-placeholder-note">Sample metrics</p>
          <dl className="stats-list">
            {stats.map((stat) => <StatItem key={stat.label} {...stat} />)}
          </dl>
        </div>
      </section>

      <section className="skills-section" id="skills" aria-labelledby="skills-title">
        <SectionHeading
          eyebrow="My Expertise"
          title="Skills & Approach"
          description="Core skills and development approaches across design, frontend, backend, and workflow."
          titleId="skills-title"
        />

        <div className="expertise-grid">
          <div className="skills-panel">
            <p className="panel-label">Temporary skill set</p>
            <div className="skill-groups">
              {skillGroups.map((group) => <SkillGroup key={group.title} {...group} />)}
            </div>
          </div>

          <div className="experience-panel">
            <p className="panel-label">Capability approach</p>
            <ol className="experience-list">
              {experienceItems.map((item) => (
                <li className="experience-item" key={item.role}>
                  <span className="timeline-marker" aria-hidden="true" />
                  <div className="experience-heading">
                    <div>
                      <h3>{item.role}</h3>
                      <p>Capability focus</p>
                    </div>
                  </div>
                  <p className="experience-description">{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}

export default StatsSkillsSection
