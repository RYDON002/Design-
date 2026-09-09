import './styles/app.css'
import Sidebar from './components/Sidebar'
import TopNavigation from './components/TopNavigation'
import HeroSection from './sections/HeroSection'
import ServicesSection from './sections/ServicesSection'
import ProjectsSection from './sections/ProjectsSection'
import StatsSkillsSection from './sections/StatsSkillsSection'
import TestimonialsSection from './sections/TestimonialsSection'
import ContactSection from './sections/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-shell" aria-label="Portfolio">
        <div className="main-panel">
          <TopNavigation />

          <div className="content-stage" id="content-stage">
            <HeroSection />
            <ServicesSection />
            <ProjectsSection />
            <StatsSkillsSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
