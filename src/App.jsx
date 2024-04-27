import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Home, Blog, Docs } from './components/pages'

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
