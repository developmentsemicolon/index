import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CleanMacApp from './pages/CleanMacApp'
import CleanMacDownload from './pages/CleanMacDownload'
import CleanMacPrivacy from './pages/CleanMacPrivacy'
import CleanMacTerms from './pages/CleanMacTerms'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cleanmacapp" element={<CleanMacApp />} />
      <Route path="/cleanmacapp/download" element={<CleanMacDownload />} />
      <Route path="/cleanmacapp/privacy" element={<CleanMacPrivacy />} />
      <Route path="/cleanmacapp/terms" element={<CleanMacTerms />} />
    </Routes>
  )
}

export default App

