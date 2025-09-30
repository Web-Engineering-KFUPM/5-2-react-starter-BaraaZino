import './App.css'
import StudentCard from './components/StudentCard'
function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          <h1>Student Info</h1>
          <StudentCard name="Baraa" id="13212" dept="EE" />
          <StudentCard name="Soory" id="22323" dept="Computer sciecne" />
        </div>
      </main>
    </div>
  )
}

export default App
