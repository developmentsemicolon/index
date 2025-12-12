import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CleanMacApp from './pages/CleanMacApp'
import CleanMacDownload from './pages/CleanMacDownload'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cleanmacapp" element={<CleanMacApp />} />
      <Route path="/cleanmacapp/download" element={<CleanMacDownload />} />
    </Routes>
  )
}

export default App

