import Icon from '../components/Icon'
import portraitPlaceholder from '../assets/portrait-placeholder.svg'
import '../styles/hero.css'

const trustItems = ['Studio 01', 'Collective 02', 'Partner 03', 'Client 04']

function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-primary">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">Hello, I&apos;m</p>
          <h1 id="hero-title">
            Creative <span className="gradient-text">Developer</span>
          </h1>
          <p className="hero-introduction">
            I shape thoughtful digital experiences where clear design and
            purposeful development work together.
          </p>

          <div className="hero-actions">
            <a className="hero-button hero-button-primary" href="#content-stage">
              <span>View My Work</span>
              <Icon name="arrow" size={16} />
            </a>
            <a className="hero-button hero-button-secondary" href="#content-stage">
              <Icon name="send" size={16} />
              <span>Contact Me</span>
            </a>
          </div>

          <div className="hero-availability" aria-label="Currently available for selected projects">
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
          <img className="hero-portrait" src={portraitPlaceholder} alt="" />

          <div className="experience-badge">
            <strong>3+</strong>
            <span>Years<br />Experience</span>
          </div>
        </div>
      </div>

      <div className="hero-trust" aria-label="Client placeholders">
        <p>Creating with teams and clients worldwide</p>
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
