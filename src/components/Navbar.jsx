import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid px-3">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/image.png" alt="VerDenovo" style={{maxWidth: '40px', height: 'auto'}} className="me-2" />
          <span className="d-none d-sm-inline">VerDenovo</span>
          <span className="d-sm-none">VD</span>
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">Início</Link>
            <Link className="nav-link" to="/pontos">Pontos</Link>
            <Link className="nav-link" to="/cadastrar">Cadastrar</Link>
            <Link className="nav-link" to="/login">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar