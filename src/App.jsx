import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home,Picture,Card,Cake,Present,Album,Flower } from "./components"
import UstimeMorever from "./components/UstimeMorever"
import './index.css'

function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pictures" element={<Picture/>}/>
          <Route path="/card" element={<Card/>}/>
          <Route path="/cake" element={<Cake/>}/>
          <Route path="/present" element={<Present/>}/>
          <Route path="/album" element={<Album/>}/>
          <Route path="/flower" element={<Flower/>}/>
          <Route path="/ustime" element={<UstimeMorever/>}/>
      </Routes>
    </Router>
  )
}

export default App
