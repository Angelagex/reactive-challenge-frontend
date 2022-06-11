import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProviderList from '../components/ProviderList'
import '../styles/App.css'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element= {<ProviderList />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
