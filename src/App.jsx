import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PontosColeta from './pages/PontosColeta'
import Cadastrar from './pages/Cadastrar'
import Login from './pages/Login'
import PerfilEmpresa from './pages/PerfilEmpresa'
import PerfilPonto from './pages/PerfilPonto'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pontos" element={<PontosColeta />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil-empresa" element={<PerfilEmpresa />} />
            <Route path="/perfil-ponto" element={<PerfilPonto />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App