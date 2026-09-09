import Icon from '../components/Icon'
import profilePortrait from '../assets/rydon-profile.png'
import '../styles/hero.css'

const trustItems = ['Studio 01', 'Collective 02', 'Partner 03', 'Client 04']

function HeroSection() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-primary">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">Hello, It&apos;s Me</p>
          <h1 id="hero-title">
            Mubarak <span className="gradient-text">Goni Sule</span>
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

          <div className="hero-availability" aria-label="Availability status placeholder">
            <span className="availability-dot" aria-hidden="true" />
            <span>Availability status placeholder</span>
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
            <strong>00+</strong>
            <span>Full-Stack<br />Developer</span>
          </div>
        </div>
      </div>

      <div className="hero-trust" aria-label="Client placeholders">
        <p>Future client and collaborator placeholders</p>
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
