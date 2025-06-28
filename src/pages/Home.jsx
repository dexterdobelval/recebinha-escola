import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Home() {
  useEffect(() => {
    // Verificar se o Bootstrap JS já foi carregado
    if (!window.bootstrap) {
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
      script.onload = () => {
        console.log('Bootstrap JS carregado')
      }
      document.head.appendChild(script)
    }
  }, [])

  return (
    <div className="row">
      <div className="col-12 col-md-10 col-lg-8 mx-auto text-center px-3">
        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center mb-4">
          <img src="/image.png" alt="EcoColeta" style={{maxWidth: '80px', height: 'auto'}} className="me-sm-3 mb-2 mb-sm-0" />
          <h1 className="display-5 display-md-4 text-success mb-0">VerDenovo</h1>
        </div>

        <p className="lead px-2">Encontre pontos de coleta de reciclagem próximos a você e contribua para um mundo mais sustentável.</p>
        <div className="mt-4 d-flex flex-column flex-sm-row gap-2 justify-content-center">
          <Link to="/pontos" className="btn btn-success btn-lg">Ver Pontos de Coleta</Link>
          <Link to="/cadastrar" className="btn btn-outline-success btn-lg">Cadastrar</Link>
        </div>

        <div className="mt-4 mt-md-5">
          <div id="carouselPromocoes" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card bg-success text-white mx-2">
                  <div className="card-body text-center p-3 p-md-4">
                    <h5 className="card-title h6 h-md-5">🤝 Parceria EcoTech Solutions</h5>
                    <p className="card-text small">Empresa líder em sustentabilidade se junta ao VerDenovo para ampliar a rede de coleta seletiva.</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card mx-2" style={{backgroundColor: '#198754'}}>
                  <div className="card-body text-center text-white p-3 p-md-4">
                    <h5 className="card-title h6 h-md-5">🌍 Semana do Meio Ambiente</h5>
                    <p className="card-text small">De 5 a 12 de junho - Eventos especiais de reciclagem em todos os pontos de coleta parceiros.</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card mx-2" style={{backgroundColor: '#198754'}}>
                  <div className="card-body text-center text-white p-3 p-md-4">
                    <h5 className="card-title h6 h-md-5">♻️ Campanha Recicle+</h5>
                    <p className="card-text small">Troque seus recicláveis por descontos em lojas parceiras. Participe e ganhe prêmios!</p>
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