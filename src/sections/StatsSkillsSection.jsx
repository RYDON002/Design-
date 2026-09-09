import Icon from '../components/Icon'
import SectionHeading from '../components/SectionHeading'
import '../styles/stats-skills.css'

const stats = [
  { value: '3+', label: 'Years Experience', icon: 'sparkles' },
  { value: '20+', label: 'Projects', icon: 'portfolio' },
  { value: '10+', label: 'Technologies', icon: 'code' },
  { value: '100%', label: 'Commitment', icon: 'layers' },
]

const skillGroups = [
  {
    title: 'Frontend',
    icon: 'code',
    skills: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    icon: 'layers',
    skills: ['Node.js', 'APIs', 'Databases'],
  },
  {
    title: 'Tools',
    icon: 'pen',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma'],
  },
]

const experienceItems = [
  {
    role: 'Role Placeholder 01',
    organization: 'Organization placeholder',
    period: 'Date placeholder',
    description: 'A short summary of responsibilities and the kind of work completed in this role.',
  },
  {
    role: 'Role Placeholder 02',
    organization: 'Organization placeholder',
    period: 'Date placeholder',
    description: 'A concise space for describing relevant contribution, collaboration, and outcomes.',
  },
  {
    role: 'Role Placeholder 03',
    organization: 'Organization placeholder',
    period: 'Date placeholder',
    description: 'A final temporary entry ready to be replaced with genuine experience information.',
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
          title="Skills & Experience"
          description="Temporary skill and experience placeholders prepared for final portfolio content."
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
            <p className="panel-label">Experience placeholders</p>
            <ol className="experience-list">
              {experienceItems.map((item) => (
                <li className="experience-item" key={item.role}>
                  <span className="timeline-marker" aria-hidden="true" />
                  <div className="experience-heading">
                    <div>
                      <h3>{item.role}</h3>
                      <p>{item.organization}</p>
                    </div>
                    <span className="experience-period">{item.period}</span>
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
