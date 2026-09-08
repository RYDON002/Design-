import './styles/app.css'
import Sidebar from './components/Sidebar'
import TopNavigation from './components/TopNavigation'

function App() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-shell" aria-label="Portfolio">
        <div className="main-panel">
          <TopNavigation />

          <section
            className="content-stage"
            id="content-stage"
            aria-label="Portfolio content"
          >
            <h1 className="sr-only">Portfolio</h1>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
