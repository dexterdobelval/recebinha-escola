import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Home() {
  useEffect(() => {
    // Inicializar o carrossel do Bootstrap
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
    document.head.appendChild(script)
  }, [])

  return (
    <div className="row">
      <div className="col-md-8 mx-auto text-center">
        <div className="d-flex align-items-center justify-content-center mb-4">
          <img src="/image.png" alt="EcoColeta" style={{maxWidth: '80px', height: 'auto'}} className="me-3" />
          <h1 className="display-4 text-success mb-0">VerDenovo</h1>
        </div> 
        <p className="lead">Encontre pontos de coleta de reciclagem próximos a você e contribua para um mundo mais sustentável.</p>
        <div className="mt-4">
          <Link to="/pontos" className="btn btn-success btn-lg me-3">Ver Pontos de Coleta</Link>
          <Link to="/cadastrar" className="btn btn-outline-success btn-lg">Cadastrar Novo Ponto</Link>
        </div>

        <div className="mt-5">
          <div id="carouselPromocoes" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card bg-success text-white">
                  <div className="card-body text-center">
                    <h5 className="card-title">🤝 Parceria EcoTech Solutions</h5>
                    <p className="card-text">Empresa líder em sustentabilidade se junta ao VerDenovo para ampliar a rede de coleta seletiva.</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card bg-info text-white">
                  <div className="card-body text-center">
                    <h5 className="card-title">🌍 Semana do Meio Ambiente</h5>
                    <p className="card-text">De 5 a 12 de junho - Eventos especiais de reciclagem em todos os pontos de coleta parceiros.</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card bg-warning text-dark">
                  <div className="card-body text-center">
                    <h5 className="card-title">♻️ Campanha Recicle+</h5>
                    <p className="card-text">Troque seus recicláveis por descontos em lojas parceiras. Participe e ganhe prêmios!</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselPromocoes" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselPromocoes" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home