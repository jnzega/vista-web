import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import { Home, About, Team, Contact } from './components/pages'

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
