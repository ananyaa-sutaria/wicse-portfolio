import './App.css'
import Navbar from './pages/Navbar.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Home/>
        <Projects/>
          {/* Pages we will import later*/}
      </div>
  
    </>
  )
}

export default App

