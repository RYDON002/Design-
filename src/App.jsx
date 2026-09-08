import './styles/app.css'
import Sidebar from './components/Sidebar'
import TopNavigation from './components/TopNavigation'
import HeroSection from './sections/HeroSection'

function App() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-shell" aria-label="Portfolio">
        <div className="main-panel">
          <TopNavigation />

          <div className="content-stage" id="content-stage">
            <HeroSection />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
