import './styles/app.css'
import Sidebar from './components/Sidebar'
import TopNavigation from './components/TopNavigation'
import HeroSection from './sections/HeroSection'
import ServicesSection from './sections/ServicesSection'
import ProjectsSection from './sections/ProjectsSection'

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
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
