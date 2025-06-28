import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/image.png" alt="VerDenovo" style={{maxWidth: '40px', height: 'auto'}} className="me-2" />
          VerDenovo
        </Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Início</Link>
          <Link className="nav-link" to="/pontos">Pontos de Coleta</Link>
          <Link className="nav-link" to="/cadastrar">Cadastrar</Link>
          <Link className="nav-link" to="/login">Login</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar