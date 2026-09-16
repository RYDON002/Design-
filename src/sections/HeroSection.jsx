import Icon from '../components/Icon'
import profilePortrait from '../assets/rydon-profile-transparent.png'
import '../styles/hero.css'

const trustItems = ['React', 'Node.js', 'PostgreSQL', 'GitHub']

function HeroSection() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-primary">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">Hello</p>
          <h1 id="hero-title">
            It&apos;s me <span className="gradient-text">RYDON</span>
          </h1>
          <p className="hero-role">Full-Stack Developer &amp; UI Designer</p>
          <p className="hero-introduction">
            A pragmatic and creative Full-Stack Developer and UI Designer. I
            build scalable backends, responsive frontends, and polished user
            interfaces focused on real user needs.
          </p>

          <div className="hero-actions">
            <a className="hero-button hero-button-primary" href="#projects">
              <span>View My Work</span>
              <Icon name="arrow" size={16} />
            </a>
            <a className="hero-button hero-button-secondary" href="#contact">
              <Icon name="send" size={16} />
              <span>Contact Me</span>
            </a>
          </div>

          <div className="hero-availability" aria-label="Availability status">
            <span className="availability-dot" aria-hidden="true" />
            <span>Available for selected projects</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="portrait-orbit portrait-orbit-large" />
          <div className="portrait-orbit portrait-orbit-small" />
          <div className="portrait-halo" />
          <span className="orbit-dot orbit-dot-one" />
          <span className="orbit-dot orbit-dot-two" />
          <span className="orbit-spark orbit-spark-one">+</span>
          <span className="orbit-spark orbit-spark-two">✦</span>
          <img className="hero-portrait" src={profilePortrait} alt="Mubarak Goni Sule" />

          <div className="experience-badge">
            <strong>4+</strong>
            <span>Years<br />Experience</span>
          </div>
        </div>
      </div>

      <div className="hero-trust" aria-label="Core technologies and workflow">
        <p>Core technologies &amp; workflow</p>
        <div className="trust-list">
          {trustItems.map((item, index) => (
            <span className="trust-item" key={item}>
              <span className="trust-mark" aria-hidden="true">{index + 1}</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
